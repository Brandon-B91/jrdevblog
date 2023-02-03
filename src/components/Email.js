import React, { useState } from "react"
import addToMailchimp from "gatsby-plugin-mailchimp"
import { Form, Input } from "reactstrap"

function Email() {
  const [email, setEmail] = useState("")
  const [status, setStatus] = useState("")
  const [message, setMessage] = useState("")

  const handleSubmit = async event => {
    event.preventDefault()
    // Mailchimp always responds with status code 200, accompanied by a string indicating the result of the response.
    const { result, msg } = await addToMailchimp(email)
    result === "success" && setEmail("")
    // Removes the HTML returned in some response messages in case of error
    setMessage(msg.split("<")[0])
    setStatus(result)
  }

  const handleChange = event => setEmail(event.target.value)

  return (
    <Form>
      <p>
        Sign Up for our newsletter and get notified when we publish new articles
        for free!
      </p>
      <div>
        <Input
          className="email-form"
          type="email"
          onChange={handleChange}
          value={email}
          placeholder="example@domain.com"
          required
        />
        <span
          status={status}
          className={
            status === "success"
              ? console.log("success")
              : console.log("failure")
          }
        >
          {message}
        </span>
      </div>
      <button
        type="submit"
        onClick={handleSubmit}
        className="btn btn-outline-secondary text-uppercase mt-4"
      >
        Subscribe
      </button>
    </Form>
  )
}

export default Email
