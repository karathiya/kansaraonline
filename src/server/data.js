module.exports = {
	people: getPeople()
};

function getPeople() {
	return [
		{id: 1, familyName: 'Kansara Harishkumar Himmatlal', address: 'Kansara Street, Nr. Green Chowk', city: "Morbi", phone: '9033496625', members:[{id:"m_1", name:"Sagar Karathiya", birthData:"11/04/1991", email:"sagar_karathiya@yahoo.com", phoneNuber:"9033496625", occupation:"Software Engineer", education:"B.E. IT"},{id:"m_1", name:"Sagar Karathiya", birthData:"11/04/1991", email:"sagar_karathiya@yahoo.com", phoneNuber:"9033496625", occupation:"Software Engineer", education:"B.E. IT"},{id:"m_1", name:"Sagar Karathiya", birthData:"11/04/1991", email:"sagar_karathiya@yahoo.com", phoneNuber:"9033496625", occupation:"Software Engineer", education:"B.E. IT"}]},
		{id: 2, firstName: 'Ward', lastName: 'Bell', age: 31, location: 'California'},
		{id: 3, firstName: 'Colleen', lastName: 'Jones', age: 21, location: 'New York'},
		{id: 4, firstName: 'Madelyn', lastName: 'Green', age: 18, location: 'North Dakota'},
		{id: 5, firstName: 'Ella', lastName: 'Jobs', age: 18, location: 'South Dakota'},
		{id: 6, firstName: 'Landon', lastName: 'Gates', age: 11, location: 'South Carolina'},
		{id: 7, firstName: 'Haley', lastName: 'Guthrie', age: 35, location: 'Wyoming'},
		{id: 8, firstName: 'Aaron', lastName: 'Jinglehiemer', age: 22, location: 'Utah'}
	];
}
