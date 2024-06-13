import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function NotAuth() {
  const navigate = useNavigate();

  return (
    <div className="not_authenticated">
      <img src="/Layout/not_auth.jpg" alt="" />
      <h3>You are not authenticated.</h3>
      <p>please login or register to access this page.</p>
      <Button onClick={() => navigate('/auth')}>Login</Button>
    </div>
  )
}

export default NotAuth