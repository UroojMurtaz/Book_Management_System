import { useState, useEffect } from "react";
import { Table } from "@mantine/core";
import axios from "axios";
import moment from "moment/moment";
import { FaBeer, FaCameraRetro } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { Button } from "@mantine/core";
import { RiEdit2Line } from "react-icons/ri";
import { IoMdAddCircle } from "react-icons/io";
import AddBook from "./AddBook";
import { showNotification } from "@mantine/notifications";

function Navbar() {
  const [data, setData] = useState([]);
  const [opened, setOpened] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [fetch,setFetch]=useState()
  useEffect(() => {
    axios
      .get("http://localhost:5000/api/book/All")
      .then((res) => {
        setData(res.data.books);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [fetch]);

  const deleteBook = (id) => {
    axios
      .delete(`http://localhost:5000/api/book/${id}`)
      .then((res) => {
        showNotification({
            message: "Book Deleted Successfully",
            color: "green",
          });
        setFetch(!fetch)
       
      })
      .catch((err) => {
        console.log(err);
      });
  }
  const ths = (
    <tr>
      <th>Title</th>
      <th>Author</th>
      <th>Pages</th>
      <th>Published Date</th>
      <th>Actions</th>
    </tr>
  );
  const rows = data.map((item, index) => (
    <tr key={index}>
      <td>{item.title}</td>
      <td>{item.author}</td>
      <td>{item.no_of_pages}</td>
      {/* <td>{item.publishedDate}</td> */}
      <td>{moment(item.publishedDate).format("DD/MM/YYYY")}</td>
      <td>
        <MdDelete color="#C92A2A" fontSize="2em" onClick={()=>deleteBook(item._id)}/>
        <RiEdit2Line color="#BAC8FF" fontSize="2em" />
      </td>
    </tr>
  ));
  return (
    <div>
      <div>
        <Button
          variant="gradient"
          gradient={{ from: "indigo", to: "cyan" }}
          leftIcon={<IoMdAddCircle fontSize="1.5em" />}
          style={{ marginLeft: "87%" }}
        //   onClick={() => setOpened(true)}
        >
          Add Book
        </Button>
      </div>
      <br />
      <Table captionSide="bottom" striped highlightOnHover withBorder>
        <thead>{ths}</thead>
        <tbody>{rows}</tbody>
      </Table>
      <AddBook opened={showModal} setOpened={setShowModal}/>
    </div>
    
  );
}

export default Navbar;
