import React, { useEffect, useState } from 'react';
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from "firebase/firestore";

class Problem {
  problem_link;
  problem_name;
  Problems(problem_name, problem_link){
    this.problem_link = problem_link
    this.problem_name = problem_name
  }
}
let problemsArray = [];

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
  

  // Export Firestore instance

  const [companies, setCompanies] = useState([]);

  useEffect(() => {
    // Fetch companies collection
    const fetchCompanies = async () => {
      const app = initializeApp(firebaseConfig);
      const db = getFirestore(app);

      //DO THIS LINE FOR EVERY COMPANY, 
      // CREATE A LIST OF COMPANIES, 
      // OR MAKE ALL THE COMPANIES COLLECTIONS IN YOUR DATABSE, 
      // BECAUSE FIREBASE DOESN'T ALLOW QUERRYING SUBCOLLECTIONS 
      // INSIDE A DOCUMENT FOR SECURITY REASONS
      // REPALCE ADOBE WITH A TEMPLATE VARIABLE INSIDE A FOR LOOP
      const snapProblems = await getDocs(collection(db, "companies/Adobe/problems"));
      snapProblems.forEach((doc)=>{
        const data = doc.data()
        const problem_name = data["problem_name"]
        const problem_link = data["problem_link"]
        console.log(problem_name, problem_link)
        let problem = new Problem(problem_name,problem_link)
        // STORE IN ARRAY OR HASHMAP FOR LATER USE, MAKE SURE THE DATASTRUCTURE IS GLOBAL. 
        problemsArray.push(problem);
      })
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