import React,{useState,useContext} from 'react';
import Checkbox from './Checkbox';
import './generatePass.css';
import {AddPassword} from '../services/CommonService';
import { UserContext } from "../context/UserContext";
import { SketchPicker } from "react-color";
import {FaWindowClose} from "react-icons/fa";

export default function GeneratePass({setIsOpen}) {
    const [passwordGen, setPasswordGen] = useState({
        length: 5,
        uppercase: false,
        lowercase: false,
        numbers: false,
        symbols: false,
      });
      const [handelText, setHandelText] = useState('');
      const [copied, setCopied] = useState(false);
      const [sketchPickerColor, setSketchPickerColor] = useState("#37d67a");
      const context = useContext(UserContext);
      const [openPicker,setOpenPicker]=useState(false);
      const [email,setEmail]=useState();
      const [profileName,setProfileName]=useState();

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
          debugger;
          AddPassword(context.user?.uid,profileName,email,handelText,sketchPickerColor,context.user?.token).then((response)=>{
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
              <h1>Password Generator</h1>
          </div>
            <div class="ms-auto p-2 bd-highlight">
              <FaWindowClose size={30} onClick={()=>setIsOpen(false)}/>
            </div>
        </div>
            <div className="password-box">
              <input
                type="text"
                value={handelText}
                placeholder=""
                autoComplete="off"
                onChange={(e) => setHandelText(e.target.value)}
              />
              <button
                className="copy-button"
                onClick={() => {
                  if (handelText.length > 0) {
                    navigator.clipboard.writeText(handelText);
                    setCopied(true);
                    setInterval(() => {
                      setCopied(false);
                    }, 2000);
                  }
                }}
              >
                {copied ? 'Copied!' : 'Copy text'}
              </button>
            </div>
            <br />
            <div className="password-box">
            <div style={{marginTop:"8px"}}>
                <h2>Email</h2>
              </div>
              <input
                type="text"
                value={email}
                placeholder="Email"
                autoComplete="off"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <br />
            <div className="password-box">
            <div style={{marginTop:"8px"}}>
                <h2>Profile Name</h2>
              </div>
              <input
                type="text"
                value={profileName}
                placeholder="Profile Name"
                autoComplete="off"
                onChange={(e) => setProfileName(e.target.value)}
              />
            </div>
            <br />
            <div className="word-crieteria__box">
              <div>
                <label>Password length</label>
              </div>
              <div>
                <input
                  type="number"
                  min="4"
                  max="20"
                  value={passwordGen.length}
                  onChange={(e) => setPasswordLength(e.target.value)}
                />
              </div>
            </div>
            <div className="word-crieteria__box">
              <div>
                <label>Include uppercase letters</label>
              </div>
              <div>
                <Checkbox
                  value={passwordGen.uppercase}
                  onChange={handleChangeUppercase}
                />
              </div>
            </div>
            <div className="word-crieteria__box">
              <div>
                <label>Include lowercase letters</label>
              </div>
              <div>
                <Checkbox
                  value={passwordGen.lowercase}
                  onChange={handleChangeLowercase}
                />
              </div>
            </div>
            <div className="word-crieteria__box">
              <div>
                <label>Include numbers</label>
              </div>
              <div>
                <Checkbox
                  value={passwordGen.numbers}
                  onChange={handleChangeNumbers}
                />
              </div>
            </div>
            <div className="word-crieteria__box">
              <div>
                <label>Include symbols</label>
              </div>
              <div>
                <Checkbox
                  value={passwordGen.symbols}
                  onChange={handleChangeSymbols}
                />
              </div>
              <div className="sketchpicker" style={{display:"flex",flexDirection:'row'}}>
        <h6 style={{marginTop:"5px",marginRight:"5px"}}>Color</h6>
        
        <div
          style={{
            backgroundColor: sketchPickerColor,
            width: 25,
            height: 25,
            border: "2px solid white",
          }}
             onClick={(e)=>setOpenPicker(!openPicker)}></div>
        {/* Sketch Picker from react-color and handling color on onChange event */}
        {openPicker? <SketchPicker
          onChange={(color) => {
            setSketchPickerColor(color.hex);
          }}
          color={sketchPickerColor}
        />:null}
       
      </div>
            </div>
            <div>
              <button className="generate-button" onClick={generatePassword}>
                Generate password
              </button>
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
