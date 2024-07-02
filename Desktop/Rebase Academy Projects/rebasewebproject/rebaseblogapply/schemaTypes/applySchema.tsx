export const applySchema = {
  name: 'apply',
  type: 'document',
  title: 'Apply',
  fields: [
    {
      name: 'fullName',
      type: 'string',
      title: 'Full Name',
    },
    {
      name: 'status',
      type: 'string',
      title: 'Status',
    },
    {
      name: 'number',
      type: 'string',
      title: 'Number',
    },
    {
      name: 'gender',
      type: 'string',
      title: 'Gender',
    },
    {
      name: 'schoolQualification',
      type: 'string',
      title: 'School Qualification',
    },
    {
      name: 'programOfInterest',
      type: 'string',
      title: 'Program of Interest',
    },
    {
      name: 'email',
      type: 'email',
      title: 'Email',
    },
    {
      name: 'age',
      type: 'number',
      title: 'Age',
    },
    {
      name: 'residence',
      type: 'string',
      title: 'Residence',
    },
    {
      name: 'other',
      type: 'text',
      title: 'Other',
    },
    {
      name: 'intentionsBefore',
      type: 'text',
      title: 'Intentions Before',
    },
    {
      name: 'intentionsAfter',
      type: 'text',
      title: 'Intentions After',
    },
    {
      name: 'guardianNumber',
      type: 'string',
      title: 'Guardian Number',
    },
    {
      name: 'guardianEmail',
      type: 'email',
      title: 'Guardian Email',
    },
    {
      name: 'guardianName',
      type: 'string',
      title: 'Guardian Name',
    },
    {
      name: 'otherForguardian',
      type: 'text',
      title: 'Other for Guardian',
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      options: {
        source: 'fullName',
        maxLength: 96,
      },
    },
  ],
};