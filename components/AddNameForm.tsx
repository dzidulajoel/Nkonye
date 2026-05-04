'use client'

import { useState } from "react";

export default function AddNameForm() {
        const [form, setForm] = useState({
                name: "",
                meaning: "",
                translationFr: "",
                translationEn: "",
                pronunciation: "",
                origin: [],
                categories: []
        });

        const categoriesList = [
                "Garçon",
                "Fille",
                "Mixte",
                "Spirituel",
                "Traditionnel"
        ];

        const originsList = [
                "Togo",
                "Bénin",
                "Ghana",
                "Nigeria"
        ];

        const handleChange = (e) => {
                setForm({ ...form, [e.target.name]: e.target.value });
        };

        const handleCheckbox = (category) => {
                setForm((prev) => {
                        const exists = prev.categories.includes(category);
                        return {
                                ...prev,
                                categories: exists
                                        ? prev.categories.filter((c) => c !== category)
                                        : [...prev.categories, category]
                        };
                });
        };

        const handleOriginCheckbox = (origin) => {
                setForm((prev) => {
                        const exists = prev.origins.includes(origin);

                        return {
                                ...prev,
                                origins: exists
                                        ? prev.origins.filter((o) => o !== origin)
                                        : [...prev.origins, origin],
                        };
                });
        };

        const handleSubmit = (e) => {
                e.preventDefault();

                console.log(form); // remplacer par API call
        };

        return (
                <div className="w-full">
                        <form onSubmit={handleSubmit} className="space-y-4 ">

                                {/* NOM */}
                                <input type="text" name="name" placeholder="Nom" value={form.name} onChange={handleChange} className="w-full bg-transparent rounded-md outline-none text-sm font-body placeholder:text-gray-400 border border-gray-300 p-2" required />

                                {/* SIGNIFICATION */}
                                <textarea name="meaning" placeholder="Signification" value={form.meaning} onChange={handleChange} className="w-full bg-transparent rounded-md outline-none text-sm font-body placeholder:text-gray-400 border border-gray-300 p-2" required />
                                {/* PRONONCIATION */}
                                <input type="text" name="pronunciation" placeholder="Prononciation : Ko . ffi" value={form.pronunciation} onChange={handleChange} className="w-full bg-transparent rounded-md outline-none text-sm font-body placeholder:text-gray-400 border border-gray-300 p-2" required />

                                {/* TRADUCTION FR */}
                                <input type="text" name="translationFr" placeholder="Traduction (FR)" value={form.translationFr} onChange={handleChange} className="w-full bg-transparent rounded-md outline-none text-sm font-body placeholder:text-gray-400 border border-gray-300 p-2" />

                                {/* TRADUCTION EN */}
                                <input type="text" name="translationEn" placeholder="Traduction (EN)" value={form.translationEn} onChange={handleChange} className="w-full bg-transparent rounded-md outline-none text-sm font-body placeholder:text-gray-400 border border-gray-300 p-2" />

                                {/* ORIGINE */}
                                <div>
                                        <h2 className="text-md font-bold font-body" >Choisir une origine</h2>
                                        <div className="flex flex-col justify-start">
                                                {originsList.map((origin) => (
                                                        <label key={origin} className="font-body text-sm mt-1 flex items-center gap-2">
                                                                <input type="checkbox" checked={form.origin.includes(origin)} onChange={() => handleOriginCheckbox(origin)} className="accent-[#207561] border border-gray-300" />
                                                                {origin}
                                                        </label>
                                                ))}
                                        </div>
                                </div>

                                {/* CATEGORIES */}
                                <div>
                                        <h2 className="text-md font-bold font-body" >Catégories</h2>
                                        <div className="flex flex-col justify-start">
                                                {categoriesList.map((cat) => (
                                                        <label key={cat} className="font-body text-sm mt-1 flex items-center gap-2">
                                                                <input type="checkbox" checked={form.categories.includes(cat)} onChange={() => handleCheckbox(cat)} className="accent-[#207561] border border-gray-300" />
                                                                {cat}
                                                        </label>
                                                ))}
                                        </div>
                                </div>

                                {/* BOUTON */}
                                <button type="submit" className="w-full h-12 rounded-lg flex justify-center text-white  items-center gap-8 p-1 bg-[#207561] hover:bg-[#222222] cursor-pointer transition  duration-300" > Soumettre</button>
                        </form>
                </div>
        );
}