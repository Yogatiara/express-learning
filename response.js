const response = (statusCode, data, message, res) => {
  res.json(statusCode, [
    {
      data,
      message,
      metadata: {
        prev: "",
        next: "",
        curent: ""
      }

    }
  ])

}


module.exports = response;