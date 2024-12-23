import React,{useState} from 'react'

interface BankFormData {
    voen: string;
    companyName: string;
    activityAddress: string;
    contactInfo: string;
    loginID: string;
    password: string;
  }
const Dovlet1 :React.FC = () => {
 const [formData, setFormData] = useState<BankFormData>({
        voen: '',
        companyName: '',
        activityAddress: '',
        contactInfo: '',
        loginID: '',
        password: '',
      });
    
      const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
          ...prevData,
          [name]: value,
        }));
      };
    
      const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Form Submitted:', formData);
      };   
  return (
<form onSubmit={handleSubmit} className="bank-form">
      <h2>Dövlət Qurumları Üçün Qeydiyyat Formu</h2>

      <label>VÖEN:</label>
      <input type="text" name="voen" value={formData.voen} onChange={handleChange} required />

      <label>Qurumun Adı:</label>
      <input type="text" name="companyName" value={formData.companyName} onChange={handleChange} required />

      <label>Fəaliyyət Göstərdiyi Ünvan:</label>
      <textarea
        name="activityAddress"
        value={formData.activityAddress}
        onChange={handleChange}
        rows={2}
        required
      />

      <label>Əlaqə Vasitələri:</label>
      <input type="text" name="contactInfo" value={formData.contactInfo} onChange={handleChange} required />

      <label>Giriş İD (VÖEN):</label>
      <input type="text" name="loginID" value={formData.loginID} onChange={handleChange} required />

      <label>Parol (məxfi hərf, rəqəm, simvollar):</label>
      <input type="password" name="password" value={formData.password} onChange={handleChange} required />

      <button type="submit">Qeydiyyatdan Keç</button>
    </form>
  )
}

export default Dovlet1