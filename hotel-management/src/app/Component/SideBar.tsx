import React from 'react'

const SideBar = () => {
  return (
    <div>
         <h2 className="text-xl font-semibold mb-4">Filters</h2>
            
            {/* <!-- Price Filter --> */}
            <div className="mb-6">
                <h3 className="text-lg font-medium mb-2">Price</h3>
                <input type="range" min="0" max="1000" className="w-full"/>
                <div className="flex justify-between text-sm">
                    <span>$0</span>
                    <span>$1000</span>
                </div>
            </div>

            {/* <!-- Customer Rating Filter --> */}
            <div className="mb-6">
                <h3 className="text-lg font-medium mb-2">Customer Rating</h3>
                <div className="space-y-2">
                    <label className="flex items-center">
                        <input type="checkbox" className="form-checkbox"/>
                        <span className="ml-2">5 Stars</span>
                    </label>
                    <label className="flex items-center">
                        <input type="checkbox" className="form-checkbox"/>
                        <span className="ml-2">4 Stars & up</span>
                    </label>
                    <label className="flex items-center">
                        <input type="checkbox" className="form-checkbox"/>
                        <span className="ml-2">3 Stars & up</span>
                    </label>
                    <label className="flex items-center">
                        <input type="checkbox" className="form-checkbox"/>
                        <span className="ml-2">2 Stars & up</span>
                    </label>
                    <label className="flex items-center">
                        <input type="checkbox" className="form-checkbox"/>
                        <span className="ml-2">1 Star & up</span>
                    </label>
                </div>
            </div>

            {/* <!-- Activity Filter --> */}
            <div className="mb-6">
                <h3 className="text-lg font-medium mb-2">Activity</h3>
                <div className="space-y-2">
                    <label className="flex items-center">
                        <input type="checkbox" className="form-checkbox"/>
                        <span className="ml-2">Hiking</span>
                    </label>
                    <label className="flex items-center">
                        <input type="checkbox" className="form-checkbox"/>
                        <span className="ml-2">Swimming</span>
                    </label>
                    <label className="flex items-center">
                        <input type="checkbox" className="form-checkbox"/>
                        <span className="ml-2">Skiing</span>
                    </label>
                    <label className="flex items-center">
                        <input type="checkbox" className="form-checkbox"/>
                        <span className="ml-2">Cycling</span>
                    </label>
                </div>
            </div>
    </div>
  )
}

export default SideBar