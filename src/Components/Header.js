import ContactTemplate from './ContactTemplate';


export default function Header() {

    const contacts = [
        {
            imagePath: "/phone.png",
            contact: "198-9210-6594"
        },
        {
            imagePath: "/mail.png",
            contact: "rogercortez@uniqueman.dev"
        },
        {
            imagePath: "/geolocation.png",
            contact: "Beijing, China"
        },
    ];

    return(
        <div>
            {/* Specify real name */}
            <h1>Roger Cortez</h1>

            {/* Specify desired job position */}
            <div style={{color:"#696969", marginBottom:"10px"}}>
                Full-Stack Engineer
            </div>

            {/* Specify list of contact methods */}
            <div style={{display:"flex", justifyContent:"space-between"}}>
                {
                    contacts.map((contactMethod, index) => (
                        <ContactTemplate 
                            key={index}
                            imagePath={contactMethod.imagePath}
                            contact={contactMethod.contact}
                        />
                    ))
                }
            </div>
    </div>
    );
};

