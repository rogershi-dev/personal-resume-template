

// Each section will have a section header name with an underscore line below
export default function SectionHeaderTemplate({ sectionHeaderName }) {
    return (
        <div style={{ 
            borderBottom:"solid 6px #e8e8e8",
            fontSize:"22px",
            fontWeight:"bolder",
            marginTop:"20px",
            paddingBottom:"5px",
            width:"auto",
            display: "inline-block"
            }}
        >
            {sectionHeaderName}
        </div>
    );
};