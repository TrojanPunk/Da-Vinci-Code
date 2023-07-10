import React, { useEffect, useState } from 'react';
import firebase from 'firebase';
import 'firebase/firestore';

const CompanyTable = () => {
  // Add your Firebase configuration object here
  const firebaseConfig = {
    apiKey: "AIzaSyBaVDE2tIMOmzrC4-Q00LPP2hydRHaC4ak",
  authDomain: "da-vinci-code-5bc6b.firebaseapp.com",
  projectId: "da-vinci-code-5bc6b",
  storageBucket: "da-vinci-code-5bc6b.appspot.com",
  messagingSenderId: "439603548198",
  appId: "1:439603548198:web:1caf8020d4f143e63d16e7",
  measurementId: "G-BTGN8HHEZ7"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  // Export Firestore instance
  const firestore = firebase.firestore();

  const [companies, setCompanies] = useState([]);

  useEffect(() => {
    // Fetch companies collection
    const fetchCompanies = async () => {
      const companiesRef = firestore.collection('companies');
      const companiesSnapshot = await companiesRef.get();

      // Extract companies' data
      const companyData = companiesSnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      // Fetch and merge problems subcollection for each company
      const companiesWithProblems = await Promise.all(
        companyData.map(async (company) => {
          const problemsRef = companiesRef.doc(company.id).collection('problems');
          const problemsSnapshot = await problemsRef.get();

          const problemsData = problemsSnapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }));

          return {
            ...company,
            problems: problemsData,
          };
        })
      );

      setCompanies(companiesWithProblems);
    };

    fetchCompanies();
  }, []);

  return (
    <table>
      <thead>
        <tr>
          <th>Company</th>
          <th>Problem Link</th>
          <th>Problem Name</th>
          <th>Number of Occurrences</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {companies.map((company) =>
          company.problems.map((problem) => (
            <tr key={problem.id}>
              <td>{company.name}</td>
              <td>{problem.problem_link}</td>
              <td>{problem.problem_name}</td>
              <td>{problem.num_ocurr}</td>
              <td>{problem.status}</td>
            </tr>
          ))
        )}
      </tbody>
    </table>
  );
};

export default CompanyTable;