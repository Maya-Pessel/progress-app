import TechnoItem from "../components/technoItem";


export default function TechnoList(props) {

    const{technos, handleDeleteTechno} = props;
  
    return(
        <div className="technoList">
            <h1>Techno list</h1>
            {
            technos.map((techno) => (
               <TechnoItem techno={techno} key={techno.technoId} handleDeleteTechno={handleDeleteTechno}/>
            ))
        }
        </div>
    )
}

