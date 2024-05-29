import SectionHeaderTemplate from './SectionHeaderTemplate';


export default function Education() {
    return (
        <div>
            <SectionHeaderTemplate sectionHeaderName="EDUCATION"/>
            
            <div style={{ 
                fontWeight:"bold",
                marginTop:"10px", 
                marginBottom:"6px" 
                }}
            >
                BACHELOR OF ENGINEERING(B.E.) IN SOFTWARE ENGINEERING, Zhuzhou, Hunan
            </div>
            
            <div style={{ display:"flex",position:"relative"}}>
                <div style={{ color:"#7d7d7d" }}>
                    Hunan University of Technology, June 2023
                </div>
                <div style={{ 
                    color:"#696969" ,
                    fontWeight:"bold",
                    position:"absolute",
                    right:"0px"
                    }}
                >
                    GPA 3.2
                </div>
            </div>

        </div>
    );
};