import React from 'react'
import Saya from "../components/saya.png"


const Biodata = () => {
  return (
    <div className='kotak-bio'>
        <img className='saya' src={Saya} alt="saya"/>
        <br/>
        <br/>
        <br/>
        <h2 className='judul-bio'>RISKI MAULIDIN AKBAR</h2>
        <p className='isi-bio'>Lahir di Nganjuk, 20 Oktober 2004. Beliau menempuh pendidikan dari SDN 01 Paninggaran sampai SMAN 01 Paninggaran.
          Nama lengkap RISKI MAULIDIN AKBAR akrab dipanggil IDIN, sering disebut-sebut manusia ter ganteng dan perkasa
          di muka bumi. Sebelum memasuki dunia IT, beliau pernah menjabat sebagai Direktur Utama di Tukang Rongsok World Society(TRWS).
          Beliau bercita-cita ingin menguasai elit global.
        </p>
    </div>
  )
}

export default Biodata;