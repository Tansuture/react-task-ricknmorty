
import BySpecies from './BySpecies';
import ByStatus from './ByStatus';
import './filter.css'
const Filter = ({
    setStatus, 
    setSpecies,
    status,species,setPage
  })=>{

    let clear =()=>{
      setSpecies('Human')
      setStatus('Alive')
      setPage(1)
    }
  return (
  <div className="col-lg-2 filter-container">
    <div className=" filter-text text-center fw-bold fs-4 mb-2">Filters</div>
    <div onClick={clear}
      className="text-primary text-decoration-underline text-center mb-3"
    > Clear Filters </div>
    <div className="accordion" id="accordionExample">
    <ByStatus  setStatus={setStatus}status={status}/>
    <BySpecies  species = {species}setSpecies={setSpecies}/>
    </div>
  </div>
  );
  }
  
export default Filter