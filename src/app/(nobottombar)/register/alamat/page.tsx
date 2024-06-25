"use client";
import AppBarRegister from '@/components/appbar/register'
import ButtonPrimary from '@/components/button/btn-primary'
import InputGroup from '@/components/input/input-group'
import { useRouter } from 'next/navigation'
import { FormEvent } from 'react'

function AlamatDomisili() {
  const router = useRouter();
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.push('/register/ktp')
  }
  return (
    <main>
      <AppBarRegister menu={'Profile'} section="Alamat & Domisili" step={2} length={5} />
      <form className="mt-2 p-4 flex flex-col gap-5" onSubmit={handleSubmit}>
        <InputGroup name='name' type='text' label='Alamat Sesuai Ktp' placeholder='Perum Putra Citra Lestari'/>
        <div className='flex flex-col w-full gap-2'>
            <label htmlFor="">Provinsi</label>
            <select name="provinsi" id="provinsi" className='outline-none rounded-full border px-4 p-2 focus:ring-1 focus:ring-red-500 '>
                <option value="Jawa Barat">Jawa Barat</option>
                <option value="Jawa Tengah">Jawa Tengah</option>
                <option value="Jawa Timur">Jawa Timur</option>
            </select>
        </div>

        <div className='flex flex-col w-full gap-2'>
            <label htmlFor="">Kabupaten</label>
            <select name="kabupaten" id="kabupaten" className='outline-none rounded-full border px-4 p-2 focus:ring-1 focus:ring-red-500 '>
                <option value="Sumedang">Sumedang</option>
                <option value="Cirebon">Cirebon</option>
                <option value="Bogor">Bogor</option>
            </select>
        </div>

        <div className='flex flex-col w-full gap-2'>
            <label htmlFor="">Kecamatan</label>
            <select name="kecamatan" id="kecamatan" className='outline-none rounded-full border px-4 p-2 focus:ring-1 focus:ring-red-500 '>
                <option value="Sumedang Utara">Sumedang Utara</option>
                <option value="Sumedang Selatan">Sumedang Selatan</option>
                <option value="Sumedang Barat">Sumedang Barat</option>
            </select>
        </div>

        <div className='flex flex-col w-full gap-2'>
            <label htmlFor="">Kelurahan</label>
            <select name="Kelurahan" id="Kelurahan" className='outline-none rounded-full border px-4 p-2 focus:ring-1 focus:ring-red-500 '>
                <option value="Situ">Situ</option>
                <option value="Curah Takir">Curah Takir</option>
                <option value="Ambulu">Ambulu</option>
            </select>
        </div>

        <ButtonPrimary label='Selanjutnya' />
      </form>
    </main>
  )
}

export default AlamatDomisili