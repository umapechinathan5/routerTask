
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Fsd from './pages/Fsd'
import Cyber from './pages/Cyber'
import DataScience from './pages/DataScience'
import Career from './pages/Career'


function App() {
      
  const datas = [
    {
      title : "Full-Stack React Projects",
      img : "https://picsum.photos/200",
      id : 1,
      author : "Chris Northwood",
      description : "Understand the technical foundations, as well as the non-programming skills needed to be a successful full stack web developer.",
      category : "Fsd",
      date : 2018
    },
    {
      title : "Hands on Full Stack Development",
      img :"https://picsum.photos/200",
      id : 2,
      author : "Ankur Patel",
      description : "Build full-stack shopping list applications from scratch for web and mobile platforms using Xcode, Vapor, and SwiftKey",
      category : "Fsd",
      date : 2020
    },
    {
      title : "Full stack javascript",
      img : "https://picsum.photos/200",
      id : 3,
      author : "Azat Mardan",
      description : "Learn agile JavaScript web development using the latest cutting-edge front-end and back-end technologies",
      category : "Fsd",
      date : 2015
    },
    {
      title : "PRO Mern Stack",
      img : "https://picsum.photos/200",
      id : 4,
      author : "Vasan Subramanian",
      description : "Assemble the complete stack required to build a modern web app using React , MongoDB (a NoSQL database) and Express.",
      category : "Fsd",
      date : 2012
    },
    {
      title : "Cracking the Full Stack Developer Interview ",
      img : "https://picsum.photos/200",
      id : 5,
      author : "Hiraka San",
      description : "It is the result of intensive curation of commonly asked interview questions, teaching you everything you need to know to land the best software developer jobs.",
      category : "Fsd",
      date : 2019
    },
    {
      title : "Principles of Data Science",
      img : "https://picsum.photos/200",
      id : 6,
      author : "Peter Bruce",
      description : "This book describes, simply and in general terms, the process of analyzing data.",
      category : "Datascience",
      date : 2017
    },
    {
      title : "Data Science and Machine Learning using Python",
      img : "https://picsum.photos/200",
      id : 7,
      author : "Reema Thareja",
      description : "The objective of this book is to introduce the concepts of Python programming language in a lucid way.",
      category : "Datascience",
      date : 2014
    },
    {
      title : "Data Science for Business",
      img : "https://picsum.photos/200",
      id : 8,
      author : "Foster Provost",
      description : "The fundamental principles of data science and walks you through the data analytic thinking necessary for extracting useful knowledge.",
      category : "Datascience",
      date : 2004
    },
    {
      title : "Data Science From Scratch",
      img : "https://picsum.photos/200",
      id : 9,
      author : "Joel Grus",
      description : "Learn the basics of linear algebra, statistics, and Probability how and when they're used in data science Collect, explore, clean, munge, and manipulate data.",
      category : "Datascience",
      date : 2021
    },
    {
      title : "Cybersecurity Essentials",
      img : "https://picsum.photos/200",
      id : 10,
      author : "Charles J",
      description : "Cybersecurity Essentials provides a comprehensive introduction to the field, with expert coverage of essential topics required for entry-level cybersecurity certifications.",
      category : "Cybersecurity",
      date : 2001
    },
    {
      title : "INTRODUCTION TO CYBERSECURITY",
      img : "https://picsum.photos/200",
      id : 11,
      author : "Ajay Singh",
      description : "This book aims to provide students with foundational knowledge across the broad range of topics that they need to navigate cybersecurity",
      category : "Cybersecurity",
      date : 2012
    },
    {
      title : "Guide to the World of Cyber Security",
      img : "https://picsum.photos/200",
      id : 12,
      author : "Anand Shinde",
      description : "It can serve as a reference manual for those working in the Cyber Security domain.",
      category : "Cybersecurity",
      date : 2021
    },
    
  ]

  return (
    <BrowserRouter>
    <Navbar />
    <Routes>

     <Route path={"/"} element={<Home datas={datas} />}/>
     <Route path={"Fsd"} element={<Fsd datas={datas} />}/>
     <Route path={"Cyber"} element={<Cyber datas={datas} />}/>
     <Route path={"DataScience"} element={<DataScience datas={datas} />}/>
     <Route path={"Career"} element={<Career/>}/>

    </Routes>
    </BrowserRouter>
    
  )
}

export default App
