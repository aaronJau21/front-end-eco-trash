export const InputsSearch = () => {
    return (
        <>
            <div>
                <label htmlFor="departamento" className="block text-white mb-3 text-lg">Departamentos:</label>

                <div className="flex bg-white pl-3 py-3 rounded-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                    </svg>

                    <input type="text" id="departamento" className="placeholder:pl-2 rounded-lg" placeholder="Lima" />
                </div>
            </div>

            <div className="mt-3">
                <label htmlFor="departamento" className="block text-white mb-3 text-lg">Nombre de su vivienda::</label>

                <div className="flex bg-white pl-3 py-3 rounded-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                    </svg>

                    <input type="text" id="departamento" className="placeholder:pl-2 rounded-lg" placeholder="Edificio Winkel" />
                </div>
            </div>
        </>
    )
}
