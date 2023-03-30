import React,{useState,useContext} from 'react';
import Checkbox from './Checkbox';
import './generatePass.css';
import {AddPassword} from '../services/CommonService';
import { UserContext } from "../context/UserContext";
import { SketchPicker } from "react-color";
import {FaWindowClose} from "react-icons/fa";

export default function EditPupUp({profile,setIsOpen}) {
    const [passwordGen, setPasswordGen] = useState({
        length: 5,
        uppercase: false,
        lowercase: false,
        numbers: false,
        symbols: false,
      });
      const [handelText, setHandelText] = useState('');
      const [copied, setCopied] = useState(false);
      const [color,setColor]=useState("#37d67a");
      const context = useContext(UserContext);
      const [openPicker,setOpenPicker]=useState(false);
      const handleChangeUppercase = () => {
        setPasswordGen({
          ...passwordGen,
          uppercase: !passwordGen.uppercase,
        });
      };
    
      const handleChangeLowercase = () => {
        setPasswordGen({
          ...passwordGen,
          lowercase: !passwordGen.lowercase,
        });
      };
    
      const handleChangeNumbers = () => {
        setPasswordGen({
          ...passwordGen,
          numbers: !passwordGen.numbers,
        });
      };
    
      const handleChangeSymbols = () => {
        setPasswordGen({
          ...passwordGen,
          symbols: !passwordGen.symbols,
        });
      };
    
      const setPasswordLength = (val) => {
        setPasswordGen({
          ...passwordGen,
          length: val,
        });
      };
    
      function generatePassword() {
        const numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
        const symbolsArray = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')'];
    
        const characterCodes = Array.from(Array(26)).map((_e, i) => i + 97);
        const lowerCaseLetters = characterCodes.map((code) =>
          String.fromCharCode(code)
        );
        const upperCaseLetters = lowerCaseLetters.map((letter) =>
          letter.toUpperCase()
        );
    
        const { length, uppercase, lowercase, numbers, symbols } = passwordGen;
    
        const generateTheWord = (
          length,
          uppercase,
          lowercase,
          numbers,
          symbols
        ) => {
          const availableCharacters = [
            ...(lowercase ? lowerCaseLetters : []),
            ...(uppercase ? upperCaseLetters : []),
            ...(numbers ? numbersArray : []),
            ...(symbols ? symbolsArray : []),
          ];
          const shuffleArray = (array) => array.sort(() => Math.random() - 0.5);
          const characters = shuffleArray(availableCharacters).slice(0, length);
          setHandelText(characters.join(''));
          return characters;
        };
    
        generateTheWord(length, uppercase, lowercase, numbers, symbols);
      }

      const savePass=()=>{
          AddPassword(context.user?.uid,profile,handelText,context.user?.email,color,context.user?.token).then((response)=>{
            setIsOpen(false);
            console.log("Password saved")
          }).catch((error)=>{
          console.log(error);
      });
      }
      
      return (
        <div className="wrapper">
          <div className="container wrapper-box">

            <div class="d-flex bd-highlight mb-3">
          <div class="p-2 bd-highlight">
              <h1>Edit Profile</h1>
          </div>
            <div class="ms-auto p-2 bd-highlight">
              <FaWindowClose size={30} onClick={()=>setIsOpen(false)}/>
            </div>
        </div>
            <div className="password-box">
            <div>
                <h2>Profile</h2>
              </div>
              <input
                type="text"
                value={handelText}
                placeholder=""
                autoComplete="off"
                onChange={(e) => setHandelText(e.target.value)}
              />
            </div>
            <br />
            <div className="password-box">
            <div>
                <h2>Password</h2>
              </div>
              <input
                type="text"
                value={handelText}
                placeholder=""
                autoComplete="off"
                onChange={(e) => setHandelText(e.target.value)}
              />
            </div>
            <br />
            <div className="password-box">
            <div>
                <h2>Password</h2>
              </div>
              <input
                type="text"
                value={handelText}
                placeholder=""
                autoComplete="off"
                onChange={(e) => setHandelText(e.target.value)}
              />
            </div>
            <div>
              <button className="generate-button" onClick={savePass}>
                Save
              </button>
            </div>
          </div>
        </div>
      );
}
