
// exports.seed = function(knex) {
//   // Deletes ALL existing entries
//   return knex('authors').del()
//     .then(function () {
//       // Inserts seed entries
//       return knex('table_name').insert([
//         {id: 1, colName: 'rowValue1'},
//         {id: 2, colName: 'rowValue2'},
//         {id: 3, colName: 'rowValue3'}
//       ]);
//     });
// };

// @ts-check
/**
 * @param {import("knex")} knex
 */

 exports.seed = knex => knex('authors').del()
 .then(() => knex('authors').insert([
     {
        name: 'J.K. Rowling',
        address: '123 Fake Street',
     },
     {
        name: 'Stephen King',
        address: '456 Fake Street',
     },
     {
        name: 'J.R.R. Tolkien',
        address: '789 Fake Street',
     }
 ]));
