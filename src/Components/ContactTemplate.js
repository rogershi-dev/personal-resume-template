


export default function ContactTemplate({ imagePath, contact }) {
    return (
        <div style={{ 
            display:"flex",
            backgroundColor:"#e1e1e1",
            borderRadius:"10px",
            width:"auto",
            marginRight:"10px",
            alignItems:"center",
            overflow:"hidden"
            }}
        >
            <div style={{marginTop:"5px", marginLeft:"5px"}}>
                <img src={imagePath} style={{ width:"50px", height:"auto" }}/>
            </div>
            <div style={{margin:"0px 8px", fontSize:"17px" }}>
                {contact}
            </div>
        </div> 
    );
};