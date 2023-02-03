import {useEffect} from 'react'
import { TextInput, Button, Box, Code } from '@mantine/core';
import { DatePicker } from '@mantine/dates';
import { Modal } from '@mantine/core';
import { useForm } from "@mantine/form";
import axios from "axios";
import { showNotification } from "@mantine/notifications";


function AddBook({opened, setOpened,editData,setFetch,setEditData}) {
  console.log(editData)
  useEffect(() => {
    if (editData) {
      form.setFieldValue("title", editData?.title);
      form.setFieldValue("author", editData?.author);
      form.setFieldValue("no_of_pages", editData?.no_of_pages);
      form.setFieldValue("published_at", new Date(editData?.published_at));
    }
  }, [editData]);

  const form = useForm({
    validateInputOnChange: true,
    initialValues: {
      title: "",
      author: "",
      no_of_pages: "",
      published_at: "",
    },
  });

  const addBook = async () => {
    if (editData) {
      const { data } = await axios.put(`http://localhost:5000/api/book/${editData._id}`, form.values)
      if (data.success) {
        setEditData("")
        showNotification({
          message: "Book Updated Successfully",
          color: "green",
        });
        setOpened(false);
        setFetch((v) => !v);
        form.reset();
      }
    }else{
      const { data } = await axios.post("http://localhost:5000/api/book/add", form.values)
      if (data.success) {
        showNotification({
          message: "Book Added Successfully",
          color: "green",
        });
        setOpened(false);
        setFetch((v) => !v);
        form.reset();
      }
    }
  }

  console.log(opened)
  return (
    <Modal
      opened={opened}
      onClose={() => setOpened(false)}
      title="Add New Book" style={{ fontSize: "1em", alignItems: "center", justifyContent: "center" }}>
      <Box sx={{ maxWidth: 400 }} mx="auto">
        <form
          onSubmit={form.onSubmit((values) => addBook(values))}
        >
          <TextInput
            label="Title"
            placeholder="book title"
            {...form.getInputProps('title')}
          />
          <TextInput
            label="Author"
            placeholder="Book Author"
            mt="md"
            {...form.getInputProps('author')}
          />
          <TextInput
            type="number"
            label="Number of Pages"
            placeholder="number of pages"
            mt="md"
            {...form.getInputProps('no_of_pages')}
          />

          <DatePicker placeholder="Pick date" label="Published Date" mt="md" {...form.getInputProps('published_at')} />
          <Button type="submit" mt="md" variant="gradient"
            gradient={{ from: "indigo", to: "cyan" }} style={{ marginLeft: "72%" }}>
            {editData ? "Update Book" : "Add Book"}
          </Button>
        </form>

        {/* {submittedValues && <Code block>{submittedValues}</Code>} */}
      </Box>
    </Modal>
  )
}

export default AddBook