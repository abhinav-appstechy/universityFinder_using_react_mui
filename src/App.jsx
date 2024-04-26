import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css';
import { allCountries } from './allCountries';
import { useEffect } from 'react';
import Header from './Components/Header';
import HeroSection from './Components/HeroSection';
import UniversityFinder from './Components/UniversityFinder';
import AboutUs from './Components/AboutUs';
import Footer from './Components/Footer';
import ContactUs from './Components/ContactUs';


function App() {
  const [university, setUniversity] = useState("");
  const [selectedCountry, setSelectedCountry] = useState('');
  const [resultantUniversities, setResultantUniversities] = useState([]);
  const [result, setResult] = useState(null)


  const handleChange = (e) => {
    setSelectedCountry(e.target.value);
    handleFindUniversity(e.target.value);
  };  

  const handleFindUniversity = (countryName) =>{
    fetch(`http://universities.hipolabs.com/search?country=${countryName}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      },
      
    })
    .then((res)=>{
      if(!res.ok){
        throw new Error("An error occured!!!");
      }
      return res.json();
    })
    .then((data)=>{
      console.log(data);
      setResultantUniversities(data)
    })
    .catch((error)=>{
      console.log(error);
    })
  }


  const handleFindUniversityName = (e) =>{
    e.preventDefault();
    const university1 = resultantUniversities.filter((uni)=>{
      return uni.name.toLowerCase() === university.toLowerCase();
    });

    setResult(university1);

  }

  useEffect(() => {
    console.log("result",result)
  }, [result])
  

  return (
    <>
    <Header />
    <HeroSection />
    <UniversityFinder />
    <AboutUs />
    <ContactUs />
    <Footer />
     
    </>
  )
}

export default App
