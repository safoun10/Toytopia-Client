import React, { useEffect, useState } from 'react';
import TopNav from '../../components/topNav/TopNav';
import useTitle from '../../components/hooks/useTitle';
import AllToyTable from '../../components/allToyTable/AllToyTable';

const AllToys = () => {
    useTitle("All Toys");

    const [toys , setToys] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/all-toys")
        .then(res => res.json())
        .then(data => setToys(data))
    } , [])

    console.log(toys);
    return (
		<div>
			<TopNav></TopNav>
			<div className="mx-auto my-5" style={{ maxWidth: "1200px" }}>
				<table className="table table-striped">
					<thead>
						<tr className='table-dark'>
							<th scope="col">Seller</th>
							<th colSpan={2} scope="col">Toy Name</th>
							<th scope="col">Sub Category</th>
							<th scope="col">Price</th>
							<th scope="col">Rating</th>
							<th scope="col">Details</th>
							<th scope="col">Delete</th>
						</tr>
					</thead>
					<tbody>
                        <>
                            {toys.map(toy => <AllToyTable key={toy._id} toy={toy}></AllToyTable>)}
                        </>
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default AllToys;