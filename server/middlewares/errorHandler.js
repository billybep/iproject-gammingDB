module.exports = (err, req, res, next) => {
  console.log(err,'aaz')
  console.log(err.errors[0].message,'zzzzzzzzzzzzzzzzzzzzzzzzzz');
  switch (err.name) {
    case 'SequelizeUniqueConstraintError':
      res.status(400).json({ message: err.errors[0].message  })
      break;
    case 'SequelizeValidationError':
      res.status(400).json({ message: err.errors[0].message  })
      break;
  
    default:
      res.status(500).json({ message: 'Internal Server Error' })
      break;
  }
}