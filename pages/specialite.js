import Navbar from '../components/Navbar2'

function specialite() {
        return (
            <div className="relative">
                <Navbar />
                
            <div className="relative pl-4">
                <h2 className="mt-6 mb-6 text-3xl text-gray-400 ">SPECIALITES</h2>
             
                <div>
                <div className="flex mt-2 font-light text-sm ">
                    <h5 className=" text-gray-900">SAVOYARD'S PLATE</h5>
                    <span className=" ml-2 font-light text-pink-500">16.50 €</span>
                    </div>
                    <p className="text-xs italic">Croûte, Croziflette, Cured Ham & green salad</p>
                </div>
                
                <div>
                    <div className="flex mt-2 font-light text-sm">
                        <h5 className=" text-gray-900">CROUTE DU GOUET & GREEN SALAD </h5>
                        <span className=" ml-2 font-light text-pink-500">16.00 €</span>
                    </div>
                    <p className="text-xs italic">Bread soaked in white wine, Cooked Ham, Cheese & Eggs</p>
                </div>
                
                <div>
                    <div className="flex mt-2 font-light text-sm">
                        <h5 className=" text-gray-900">CROZIFLETTE & GREEN SALAD</h5>
                        <span className=" ml-2 font-light text-pink-500">16.00 €</span>
                    </div>
                </div>
                
                <div>
                    <div className="flex mt-2 font-light text-sm">
                        <h5 className=" text-gray-900">SMOKED DIOTS with CHIP'S or POTATOES</h5>
                        <span className=" ml-2 font-light text-pink-500">16.00 €</span>
                    </div>
                    <p className="text-xs italic">Local smoked sausages, white wine sauce</p>
                </div>

                <div>
                    <div className="flex mt-2 font-light text-sm">
                        <h5 className=" text-gray-900">ECORCES DE SAPIN (Baked cheese)</h5>
                        <span className=" ml-2 font-light text-pink-500">18.00 €</span>
                    </div>
                    <p className="text-xs italic">with Charcuterie - Potatoes- Green Salad</p>
                </div>
            
            
                <div>
                    <h2 className="mt-6 mb-2  text-2xl text-gray-400 ">FONDUES </h2>
                    <h3 className="mb-4 text-sm font-light italic text-pink-500">for 2 people minimum</h3>
                    <div className="flex">
                        <h5 className="  text-gray-600 font-light">COMTE CHEESE FONDUE</h5>
                        <span className=" ml-2 mb-2 font-light text-pink-500">19.00 €</span>
                    </div>
                    <p className="text-sm font-light">250 g/people with green salad</p>
                    <p className="text-xs text-gray-400 italic ">charturerie in extra <span className="text-pink-500">3.00 €</span></p>
                </div>
                
                <div>
                    <div className="flex mt-2 font-light ">
                        <h5 className="mt-5 text-gray-600">COMTE CHEESE FONDUE with CEPS</h5>
                        <span className=" mt-5 mb-2 ml-2 font-light text-pink-500">21.00 €</span>
                    </div>
                    <p className="text-sm font-light">250 g/people with green salad</p>
                    <p className="mb-5 text-xs text-gray-400 italic">charturerie in extra <span className="text-pink-500">3.00 €</span> </p>
                    
                </div>
            </div>
        </div>
   

  
  );
}

export default specialite;