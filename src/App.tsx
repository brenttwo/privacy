import './App.css'

function App() {
  return (
    <div className="card">
      <h1>Privacy Policy</h1>

      <p>
        When you verify, we grab your
        IP address and immediately run it through SHA-256. That turns it into
        a jumble of letters and numbers that cant be reversed. We never store
        your actual IP anywhere, just that hash.
      </p>

      <p>
        The hash is used for one thing: checking if someone with the same IP
        has already verified. Thats it. We dont sell it, share it, trade it,
        or do anything else with it. Its basically just an anti ban evasion
        measure.
      </p>

      <p>
        Example:
      </p>

      <pre>IP:    123.123.123.123<br/>Hash:  8d969eef6ecad3c29a3a629280e686cf0c3f5d5a86aff3ca12020c923adc6c92</pre>

      <p>
        That hash is all that ever gets stored. The original IP never reaches
        the database, a log file, or anywhere else.
      </p>

      <p>
        If you want to know what IP hash we have stored for you, or want it
        removed, just message the server owner or open a ticket with your
        Discord user ID. We can delete the hash from our database for you.
        Keep in mind though: if you have been flagged for ban evasion or
        using an alt account, we will not remove your data.
      </p>

      <div className="divider" />

      <p className="small">
        Source code: <a href="https://github.com/brenttwo/verify">github.com/brenttwo/verify</a>
      </p>

      <p className="small">
        Email: <a href="mailto:signaajames@proton.me">signaajames@proton.me</a> (replies may take a bit longer)
      </p>

      <p className="small">
        To request data removal or review: DM a server owner with your user ID,
        or open a ticket in the server, or email the address above.
      </p>
    </div>
  )
}

export default App
