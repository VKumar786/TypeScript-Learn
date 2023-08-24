const Status = (props: StatusProps) => {
  let message;
  if (props.status === "loading") message = "Loading...";
  else if (props.status === "success") message = "Data Fetched SuccessFully!";
  else if (props.status === "error") message = "Error Fetched Data";

  return (
    <>
      <h3>Status : {message}</h3>
    </>
  );
};

type StatusProps = {
  status: "loading" | "success" | "error";
};

export default Status;
