const Step3 = ({ formData, setFormData, prevStep }) => {
  const handleSubmit = () => {
    // Add your form submission logic here
    console.log("Form submitted: ", formData);
  };

  return (
    <div>
      <h2>Step 3</h2>
      <input
        type="email"
        placeholder="Email"
        value={formData.email}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
      />
      <button onClick={prevStep}>Previous</button>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default Step3;
