let CurrentTime = () => {

    let time = new Date();


  return <p classNameName="lead"  > This is the current time:{time.toLocaleDateString()}
  - {time.toLocaleDateString()}
  
  </p>;
}

export default CurrentTime;