import './frame.css'; 
const DotModal = () => {
  return (
    <div className="DotModal">
          <div className="modal">
            <button className="button" style={{display:"flex", justifyContent:"space-between", flexDirection:"row"}}>
              <div><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#ffffff"><path d="M480-120v-80h280v-560H480v-80h280q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H480Zm-80-160-55-58 102-102H120v-80h327L345-622l55-58 200 200-200 200Z"/></svg></div>
              <div style={{marginTop:"5px"}}> Sign up or Log in</div>
              </button>
            <button className="button" style={{display:"flex", justifyContent:"space-between", flexDirection:"row"}}>
              <div><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#ffffff"><path d="M200-80v-760h640l-80 200 80 200H280v360h-80Zm80-440h442l-48-120 48-120H280v240Zm0 0v-240 240Z"/></svg></div>
              <div style={{marginTop:"5px"}}>Report page</div>
            </button>
            <button className="button" style={{display:"flex", justifyContent:"space-between", flexDirection:"row"}}>
              <div><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#ffffff"><path d="M480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-75 29-147t81-128.5q52-56.5 125-91T475-881q21 0 43 2t45 7q-9 45 6 85t45 66.5q30 26.5 71.5 36.5t85.5-5q-26 59 7.5 113t99.5 56q1 11 1.5 20.5t.5 20.5q0 82-31.5 154.5t-85.5 127q-54 54.5-127 86T480-80Zm-60-480q25 0 42.5-17.5T480-620q0-25-17.5-42.5T420-680q-25 0-42.5 17.5T360-620q0 25 17.5 42.5T420-560Zm-80 200q25 0 42.5-17.5T400-420q0-25-17.5-42.5T340-480q-25 0-42.5 17.5T280-420q0 25 17.5 42.5T340-360Zm260 40q17 0 28.5-11.5T640-360q0-17-11.5-28.5T600-400q-17 0-28.5 11.5T560-360q0 17 11.5 28.5T600-320ZM480-160q122 0 216.5-84T800-458q-50-22-78.5-60T683-603q-77-11-132-66t-68-132q-80-2-140.5 29t-101 79.5Q201-644 180.5-587T160-480q0 133 93.5 226.5T480-160Zm0-324Z"/></svg></div>
              <div style={{marginTop:"5px"}}>Cookie setting</div>
            </button>
          </div>
        </div>
  )
}

export default DotModal;