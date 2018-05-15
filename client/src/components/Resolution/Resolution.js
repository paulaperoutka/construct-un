// import React from "react";
// import { Container } from "reactstrap";

// const ResolutionCard = props => (
// 	<div className="">
// 		<Container fluid>
//       <Row>
//         <Col size="md-6">
//           <Jumbotron>
//             <h1>What Books Should I Read?</h1>
//           </Jumbotron>
//           <form>
//             <Input name="title" placeholder="Title (required)" />
//             <Input name="author" placeholder="Author (required)" />
//             <TextArea name="synopsis" placeholder="Synopsis (Optional)" />
//             <FormBtn>Submit Book</FormBtn>
//           </form>
//         </Col>
//         <Col size="md-6 sm-12">
//           <Jumbotron>
//             <h1>Books On My List</h1>
//           </Jumbotron>
//           {this.state.books.length ? (
//             <List>
//               {this.state.books.map(book => (
//                 <ListItem key={book._id}>
//                   <a href={"/books/" + book._id}>
//                     <strong>
//                       {book.title} by {book.author}
//                     </strong>
//                   </a>
//                   <DeleteBtn />
//                 </ListItem>
//               ))}
//             </List>
//           ) : (
//             <h3>No Results to Display</h3>
//           )}
//         </Col>
//       </Row>
//     </Container>
// 	</div>
// );