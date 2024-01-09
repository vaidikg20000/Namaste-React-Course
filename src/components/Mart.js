import { useState } from "react";

const Section = ({ title, description, isVisible, setVisible, setHide }) => {
  return (
    <div className="border border-black p-2 m-2">
      <h3 className="font-bold text-xl">{title}</h3>
      {isVisible && <p className="">{description}</p>}
      
        {!isVisible ? (<button className="underline" onClick={() => setVisible()}> Show </button>) : (<button className="underline" onClick={() => setHide()}> Hide </button>)}
    </div>
  );
};

const Instamart = () => {
  const [visibleSection, setVisibleSection] = useState("mart");
  return (
    <div>
      <h1>this is instamart</h1>
      <Section
        title="Instamart"
        description='Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, comes from a line in section 1.10.32'
        isVisible={visibleSection === "mart"}
        setVisible={()=>setVisibleSection("mart")}
        setHide={()=>setVisibleSection(" ")}
      />
      <Section
        title="Careers"
        description='Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, comes from a line in section 1.10.32'
        isVisible={visibleSection === "careers"}
        setVisible={()=>setVisibleSection("careers")}
        setHide={()=>setVisibleSection(" ")}
      />
    </div>
  );
};

export default Instamart;
