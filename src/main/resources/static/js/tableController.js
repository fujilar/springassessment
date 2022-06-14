// class ItemController {

//     constructor() {

//         this._items = []; // array to store items

//     }

//     addItem(name, description, date) {

//         let itemController = this;
//         const formData = new FormData();
//         formData.append('name', name);
//         formData.append('description', description);
//         formData.append('date', date);

//         console.log(formData);

//         fetch("http://localhost:8080/item/add", {
//            method: 'POST',
//            body: formData
//            })
//            .then(function(response) {
//                console.log(response.status); // Will show you the status
//                if (response.ok) {
//                    alert("Successfully Added Product!")
//                }
//                else {
//                     throw Error(response.StatusText);
//                }
//            })
//            .catch((error) => {
//                console.error('Error:', error);
//                alert("Error adding item to Product")
//            });

//     }

//     displayItem() {

//         let itemController = this;
//         itemController._items = [];

//         fetch("http://localhost:8080/item/all")
//             .then((resp) => resp.json())
//             .then(function(data) {
//                 console.log("2. receive data")
//                 console.log(data);
//                 data.forEach(function (item, index) {

//                     const itemObj = {
//                         id: item.id,
//                         name: item.name,
//                         description: item.description,
//                         date: item.date
//                    };

//                     itemController._items.push(itemObj);
//                 });

//                 itemController.renderProductPage();
//             })
//             .catch(function(error) {
//                 console.log(error);
//             });

//     }

//     renderProductPage() {

//         let itemHTML = "";

//         for (let i=0; i<this._items.length; i++) {

//             let item = this._items[i]; //assign the individual item to the variable
//             let tempDate = new Date(item.date);
//             let convertDate = tempDate.toLocaleDateString('en-GB');

//             itemHTML +=
//             `
//                 <tr>
//                     <td>${item.name}</td>
//                     <td>${item.description}</td>
//                     <td>${convertDate}</td>
//                 </tr>
//             `;
//         }

//         document.querySelector('#table-content').innerHTML = itemHTML;

//     }

// } // end of itemController