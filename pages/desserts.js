import Head from 'next/head';
import Navbar from '../components/Navbar2'
function desserts() {
    return (
    
        <div className="relative w-full">
                 <Navbar />  
                <div className="relative pl-4">
                <h2 className="mt-6 mb-6  font-light text-2xl text-gray-500">DESSERTS & FROMAGES </h2>
                <div className="text-gray-600 md:grid-cols-2 md:gap-16">
                    <div>
                        <div>
                            <div className="flex mt-2 font-light text-sm">
                                <h5 className="  text-gray-900">PIECE OF CHEESE</h5>
                                <span className=" ml-2  text-pink-500">3.00 €</span>
                            </div>
                            <p className="text-sm italic "><span className="text-pink-500">Choice: </span>Reblochon, Tomme, ou Comté</p>
                        </div>

                        <div>
                            <div className="flex mt-2 font-light text-sm">
                                <h5 className="  text-gray-900">CHEESES PLATTER</h5>
                                <span className=" ml-2  text-pink-500">8.50 €</span>
                            </div>
                            <p className="text-xs italic">3 cheeses & green salad</p>
                        </div>
                        
                        <div>
                            <div className="flex mt-2 font-light text-sm">
                                <h5 className="  text-gray-900">SMOOTH FROMAGE BLANC plain</h5>
                                <span className=" ml-2  text-pink-500">4.20 €</span>
                            </div>
                        </div>
                        
                        <div>
                            <div className="flex mt-2 font-light text-sm">
                                <h5 className="  text-gray-900">SMOOTH FROMAGE BLANC with cream </h5>
                                <span className=" ml-2  text-pink-500">4.40 €</span>
                            </div>
                        </div>
                        
                        <div>
                            <div className="flex mt-2 font-light text-sm">
                                <h5 className="  text-gray-900">SMOOTH FROMAGE BLANC with blueberries</h5>
                                <span className=" ml-2  text-pink-500">5.20 €</span>
                            </div>
                        </div>
                        
                        <div>
                            <div className="flex mt-2 font-light text-sm">
                            <h5 className="  text-gray-900">HOME MADE TARTE TATIN</h5>
                                <span className=" ml-2  text-pink-500">7.10 €</span>
                            </div>
                        </div>

                        <div>
                            <div className="flex mt-2 font-light text-sm">
                                <h5 className="  text-gray-900">HOME MADE CREME BRULEE</h5>
                                <span className=" ml-2  text-pink-500">6.30 €</span>
                            </div>
                        </div>
                        <div>
                            <div className="flex mt-2 font-light text-sm">
                                <h5 className="  text-gray-900">HOME MADE CHOCOLATE MOELLEUX</h5>
                                <span className=" ml-2  text-pink-500">6.30 €</span>
                            </div>
                        </div>
                        <div>
                            <div className="flex mt-2 font-light text-sm">
                                <h5 className="  text-gray-900">HOME MADE BLUEBERRIES TARTLET</h5>
                                <span className=" ml-2  text-pink-500">6.30 €</span>
                            </div>
                        </div>
                        <div>
                            <div className="flex mt-2 font-light text-sm">
                                <h5 className="  text-gray-900">MOUNTAIN COFFEE</h5>
                                <span className=" ml-2  text-pink-500">8.80 €</span>
                            </div>
                            <p className="text-xs italic">1 COFFEE, 1 Mini chocolate moelleux  & 1 liqueur </p>
                        </div>
                    </div>
                    <div>
                        <div>
                            {/* PHOTO */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    
    );
}

export default desserts;
