function Register() {
  return (
    <div>
      <form action="">
        <div>
          <label htmlFor="">username :--</label>
          <input type="text" placeholder="username" />
        </div>
        <br />
        <div>
          <label htmlFor="">firstname :--</label>
          <input type="text"  placeholder="firstname"/>
        </div>
        <br />
        <div>
          <label htmlFor="">lastname :--</label>
          <input type="text" placeholder="lastname"/>
        </div>
        <br />
        <div>
          <label htmlFor="">email :--</label>
          <input type="email" placeholder="email"/>
        </div>
        <br />
        <div>
          <label htmlFor="">password :--</label>
          <input type="password" placeholder="password"/>
        </div>
        <button>Register</button>
      </form>
    </div>
  );
}

export default Register;
