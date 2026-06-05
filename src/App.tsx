import './App.css'

function App() {
  return (
    <div className="card">
      <h1>Privacy Policy</h1>

      <p>
        When you verify, we grab your
        IP address and immediately run it through SHA-256 before storing it. We don't store
        your original IP anywhere.
      </p>

      <p>
        The hash is used for one thing: checking if someone with the same IP
        has already verified. That's it. We don't sell it, share it, trade it,
        or do anything else with it. It's basically just an anti ban evasion
        measure.
      </p>

      <p>
        Example:
      </p>

      <pre>IP:    203.0.113.42<br/>Hash:  17af1cf3d1b5332c53349fc789abdc853bbeea7ed33eff727ff794ab741ccac9</pre>

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
