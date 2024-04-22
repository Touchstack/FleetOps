import CarOwnerDashboardNavBar from "../../Components/Navbar/CarOwnerDashboardNavBar";
import CollectionForm from "./components/CollectionForm";
import DriverImage from "./components/DriverImage";
import CarImage from "./components/CarImage";
import { useState } from "react";
import Preview  from "./components/Preview";

const CarAssigning = () => {
  const [showTable, setShowTable] = useState(false)
  const [takeCarImage, settakeCarImage] = useState(false)
  const [takeDriverImage, settakeDriverImage] = useState(true)
  const [showPreview, setPreview] = useState(false)

  const showForm = () => {
     setShowTable(!showTable)
     settakeDriverImage(!takeDriverImage)
  }

  const handleTakeCarImage = () => {
    setShowTable(!showTable)
    settakeCarImage(!takeCarImage)
  }

  const handleRestart = () => {
    settakeDriverImage(!takeDriverImage)
    setShowTable(!showTable)
  }

  const handleShowPreview = () => {
    settakeCarImage(!takeCarImage)
    setPreview(!showPreview)
  }

  return (
    <div className="">
        <CarOwnerDashboardNavBar />

        {takeDriverImage && <DriverImage nextStep={showForm} />}

        {showTable && <CollectionForm onNext={handleTakeCarImage} onBack={handleRestart} />}

        {takeCarImage && <CarImage lastStep={handleShowPreview} />}

        {showPreview &&  <Preview />}
       
    </div>
  )
}

export default CarAssigning