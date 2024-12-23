// import React, { useState } from 'react';

// interface FormData {
//   voen: string;
//   companyName: string;
//   activityType: string;
//   ownershipType: string;
//   ownershipCount: number;
//   activityNature: string;
//   activityVolume: string;
//   activityAddress: string;
//   contactInfo: string;
//   loginID: string;
//   password: string;
// }

// const Sahibkar1: React.FC = () => {
//   const [formData, setFormData] = useState<FormData>({
//     voen: '',
//     companyName: '',
//     activityType: '',
//     ownershipType: '',
//     ownershipCount: 1,
//     activityNature: '',
//     activityVolume: '',
//     activityAddress: '',
//     contactInfo: '',
//     loginID: '',
//     password: '',
//   });

//   const handleChange = (
//     e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
//   ) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     console.log('Form Göndərildi:', formData);
//   };

//   return (
//     <form onSubmit={handleSubmit} style={{ padding: '20px', maxWidth: '600px', margin: '0 auto' }}>
//       <h2>Qeydiyyat Formu</h2>

//       <label>VÖEN:</label>
//       <input type="text" name="voen" value={formData.voen} onChange={handleChange} required />

//       <label>Müəssisənin Adı:</label>
//       <input type="text" name="companyName" value={formData.companyName} onChange={handleChange} required />

//       <label>Fəaliyyət Növü:</label>
//       <select name="activityType" value={formData.activityType} onChange={handleChange} required>
//         <option value="">Seçin</option> {/* Empty option for the default selection */}
//         <optgroup label="İstehsal">
//           <option value="Elmi-texniki">Elmi-texniki</option>
//           <option value="Əmtəə istehsalı">Əmtəə istehsalı</option>
//           <option value="Xidmət göstərilməsi">Xidmət göstərilməsi</option>
//           <option value="Əmtəənin istehsal istehlakı">Əmtəənin istehsal istehlakı</option>
//           <option value="Xidmətin istehsal istehlakı">Xidmətin istehsal istehlakı</option>
//           <option value="Xidmətin istehlak istehlakı">Xidmətin istehlak istehlakı</option>
//         </optgroup>
//         <optgroup label="Kommersiya">
//           <option value="Ticarət">Ticarət</option>
//           <option value="Ticarət - tədarük">Ticarət - tədarük</option>
//           <option value="Ticarət vasitəçilik">Ticarət vasitəçilik</option>
//           <option value="Əmtəə birjası">Əmtəə birjası</option>
//         </optgroup>
//         <optgroup label="Maliyyə">
//           <option value="Bank">Bank</option>
//           <option value="Sığorta">Sığorta</option>
//           <option value="Audit">Audit</option>
//           <option value="Lizinq">Lizinq</option>
//           <option value="Maliyyə birjası">Maliyyə birjası</option>
//         </optgroup>
//         <optgroup label="Konsultativ">
//           <option value="Ümumi idarəetmə">Ümumi idarəetmə</option>
//           <option value="İnzibati">İnzibati</option>
//           <option value="Maliyyə idarəetməsi">Maliyyə idarəetməsi</option>
//           <option value="Kadrların idarə edilməsi">Kadrların idarə edilməsi</option>
//           <option value="Marketing">Marketing</option>
//           <option value="İnformasiya texnologiyası">İnformasiya texnologiyası</option>
//         </optgroup>
//       </select>

//       <label>Mülkiyyət Növü:</label>
//       <select name="ownershipType" value={formData.ownershipType} onChange={handleChange}>
//         <option value="">Seçin</option> {/* Empty option for the default selection */}
//         <option value="Dövlət">Dövlət</option>
//         <option value="Xüsusi">Xüsusi</option>
//         <option value="Bələdiyyə">Bələdiyyə</option>
//       </select>

//       <label>Mülkiyyətçilərin Sayı:</label>
//       <select name="ownershipCount" value={formData.ownershipCount.toString()} onChange={handleChange}>
//         <option value="">Seçin</option> {/* Empty option for the default selection */}
//         <option value="1">Ferdi</option>
//         <option value="2">Kollektiv</option>
//       </select>

//       <label>Fəaliyyətin Xarakterinə Görə:</label>
//       <select name="activityNature" value={formData.activityNature} onChange={handleChange}>
//         <option value="">Seçin</option> {/* Empty option for the default selection */}
//         <option value="İstehsal">İstehsal</option>
//         <option value="Kommersiya">Kommersiya</option>
//         <option value="Xidmət">Xidmət</option>
//       </select>

//       <label>Fəaliyyətin Həcmindən Görə:</label>
//       <select name="activityVolume" value={formData.activityVolume} onChange={handleChange}>
//         <option value="">Seçin</option> {/* Empty option for the default selection */}
//         <option value="Mikro">Mikro</option>
//         <option value="Kiçik">Kiçik</option>
//         <option value="Orta">Orta</option>
//         <option value="Böyük">Böyük</option>
//       </select>

//       <label>Fəaliyyət Göstərdiyi Ünvanı:</label>
//       <textarea name="activityAddress" value={formData.activityAddress} onChange={handleChange} rows={2} />

//       <label>Əlaqə Vasitələri:</label>
//       <input type="text" name="contactInfo" value={formData.contactInfo} onChange={handleChange} />

//       <label>Giriş İD (VÖEN):</label>
//       <input type="text" name="loginID" value={formData.loginID} onChange={handleChange} required />

//       <label>Parol (məxfi hərf, rəqəm, simvollar):</label>
//       <input type="password" name="password" value={formData.password} onChange={handleChange} required />

//       <button type="submit" style={{ marginTop: '10px', padding: '10px' }}>Qeydiyyatdan Keç</button>
//     </form>
//   );
// };

// export default Sahibkar1;


import React, { useState } from 'react';

interface FormData {
  voen: string;
  companyName: string;
  activityType: string;
  ownershipType: string;
  ownershipCount: string | number;
  activityNature: string;
  activityVolume: string;
  activityAddress: string;
  contactInfo: string;
  loginID: string;
  password: string;
}

const Sahibkar1: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    voen: '',
    companyName: '',
    activityType: '',
    ownershipType: '',
    ownershipCount: '',
    activityNature: '',
    activityVolume: '',
    activityAddress: '',
    contactInfo: '',
    loginID: '',
    password: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form Göndərildi:', formData);
  };

  return (
    <form onSubmit={handleSubmit} style={{ padding: '20px', maxWidth: '600px', margin: '0 auto' }}>
      <h2>Qeydiyyat Formu</h2>

      <label>VÖEN:</label>
      <input type="text" name="voen" value={formData.voen} onChange={handleChange} required />

      <label>Müəssisənin Adı:</label>
      <input type="text" name="companyName" value={formData.companyName} onChange={handleChange} required />

      <label>Fəaliyyət Növü:</label>
      <select name="activityType" value={formData.activityType} onChange={handleChange} required>
        <optgroup label="İstehsal">
          <option value="Elmi-texniki">Elmi-texniki</option>
          <option value="Əmtəə istehsalı">Əmtəə istehsalı</option>
          <option value="Xidmət göstərilməsi">Xidmət göstərilməsi</option>
          <option value="Əmtəənin istehsal istehlakı">Əmtəənin istehsal istehlakı</option>
          <option value="Xidmətin istehsal istehlakı">Xidmətin istehsal istehlakı</option>
          <option value="Xidmətin istehlak istehlakı">Xidmətin istehlak istehlakı</option>
        </optgroup>
        <optgroup label="Kommersiya">
          <option value="Ticarət">Ticarət</option>
          <option value="Ticarət - tədarük">Ticarət - tədarük</option>
          <option value="Ticarət vasitəçilik">Ticarət vasitəçilik</option>
          <option value="Əmtəə birjası">Əmtəə birjası</option>
        </optgroup>
        <optgroup label="Maliyyə">
          <option value="Bank">Bank</option>
          <option value="Sığorta">Sığorta</option>
          <option value="Audit">Audit</option>
          <option value="Lizinq">Lizinq</option>
          <option value="Maliyyə birjası">Maliyyə birjası</option>
        </optgroup>
        <optgroup label="Konsultativ">
          <option value="Ümumi idarəetmə">Ümumi idarəetmə</option>
          <option value="İnzibati">İnzibati</option>
          <option value="Maliyyə idarəetməsi">Maliyyə idarəetməsi</option>
          <option value="Kadrların idarə edilməsi">Kadrların idarə edilməsi</option>
          <option value="Marketing">Marketing</option>
          <option value="İnformasiya texnologiyası">İnformasiya texnologiyası</option>
        </optgroup>
      </select>

      <label>Mülkiyyət Növü:</label>
      <select name="ownershipType" value={formData.ownershipType} onChange={handleChange}>
        <option value="Dövlət">Dövlət</option>
        <option value="Xüsusi">Xüsusi</option>
        <option value="Bələdiyyə">Bələdiyyə</option>
      </select>

      <label>Mülkiyyətçilərin Sayı:</label>
      <select name="ownershipCount" value={formData.ownershipCount} onChange={handleChange}>
        <option value="Ferdi">Ferdi (Individual)</option>
        <option value="Kollektiv">Kollektiv (Collective)</option>
        <option value="other">Diger</option>
      </select>

      {/* {formData.ownershipCount === 'other' && (
        <input
          type="number"
          name="ownershipCount"
          value={formData.ownershipCount}
          onChange={handleChange}
          min="1"
        />
      )} */}

      <label>Fəaliyyətin Xarakterinə Görə:</label>
      <select name="activityNature" value={formData.activityNature} onChange={handleChange}>
        <option value="İstehsal">İstehsal</option>
        <option value="Kommersiya">Kommersiya</option>
        <option value="Xidmət">Xidmət</option>
      </select>

      <label>Fəaliyyətin Həcmindən Görə:</label>
      <select name="activityVolume" value={formData.activityVolume} onChange={handleChange}>
        <option value="Mikro">Mikro</option>
        <option value="Kiçik">Kiçik</option>
        <option value="Orta">Orta</option>
        <option value="Böyük">Böyük</option>
      </select>

      <label>Fəaliyyət Göstərdiyi Ünvanı:</label>
      <textarea name="activityAddress" value={formData.activityAddress} onChange={handleChange} rows={2} />

      <label>Əlaqə Vasitələri:</label>
      <input type="text" name="contactInfo" value={formData.contactInfo} onChange={handleChange} />

      <label>Giriş İD (VÖEN):</label>
      <input type="text" name="loginID" value={formData.loginID} onChange={handleChange} required />

      <label>Parol (məxfi hərf, rəqəm, simvollar):</label>
      <input type="password" name="password" value={formData.password} onChange={handleChange} required />

      <button type="submit" style={{ marginTop: '10px', padding: '10px' }}>Qeydiyyatdan Keç</button>
    </form>
  );
};

export default Sahibkar1;
