
const FeatStudents  =  {
  name: 'featStudents',
  title: 'FeatStudents',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: "studImage",
      type: "image",
      title: "Stud Image"
    },
    {
      name: "description",
      type: "string",
      title: "Description"
    },
    {
      name: 'testimony',
      title: 'Testimony',
      type: 'text',
      rows: 5, // Adjust the number of rows for the textarea as needed
    },
  ],
};

export default FeatStudents
