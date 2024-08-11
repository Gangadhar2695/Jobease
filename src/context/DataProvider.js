import React, { createContext, useState, useEffect } from 'react';

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [appdata, setAppData] = useState([]);
  const [user,setUser] = useState([]);

  // console.log('user',user)

  const contextValue = {
    data,
    appdata,
    user
  }


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3000/Offcampus");
        const result = await response.json();
        setData(result.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

    
  useEffect(() => {
    const fetchData = async () => {
      try {
        const responses = await fetch("http://localhost:3000/Appdata");
        const results = await responses.json();
        setAppData(results.data);
        // console.log('APPDATA',results);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const responses = await fetch("http://localhost:3000/getUsers");
        const users = await responses.json();
        setUser(users.data);
        //  console.log('userdata',users);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);



// console.log(appdata)

  return (
    <DataContext.Provider value={contextValue}>
      {children}
    </DataContext.Provider>
  );
};