// export default function ContactForm() {
//     const [state, handleSubmit] = useForm('xeoqoprl')
//     const [formData, setFormData] = useState<Record<string, string>>({})

//     const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//       const { name, value } = e.target
//       setFormData((prev) => ({ ...prev, [name]: value }))
//     }

//     if (state.succeeded) {
//       return (
//         <div className="mx-auto text-center">
//           <h2 className="mb-4 text-3xl font-bold">Thank you for contacting us!</h2>
//           <p>We'll get back to you as soon as possible.</p>
//         </div>
//       )
//     }

//     const renderInput = ({ id, label, type, placeholder, required }: FormField) => (
//       <div key={id} className="space-y-2">
//         <label htmlFor={id} className="text-sm text-sentri-font-heading">
//           {label}
//         </label>
//         <input
//           id={id}
//           name={id}
//           type={type}
//           placeholder={`${placeholder}${required ? '*' : ''}`}
//           value={formData[id] || ''}
//           onChange={handleInputChange}
//           required={required}
//           className="w-full border-b border-[#333] bg-transparent px-0 py-2 text-white placeholder-sentri-font-body focus:border-white focus:ring-0"
//         />
//         <ValidationError
//           prefix={label}
//           field={id}
//           errors={state.errors}
//           className="text-sm text-red-500"
//         />
//       </div>
//     )

//     return (
//       <div className="mx-auto lg:flex lg:items-start lg:gap-12">
//         <h1 className="mb-12 text-5xl font-bold md:text-7xl lg:sticky lg:top-12 lg:mb-0 lg:w-1/2">
//           Get in touch
//           <br />
//           with us.
//         </h1>
//         <form onSubmit={handleSubmit} className="space-y-6 lg:w-1/2">
//           {formFields.map(renderInput)}
//           <div className="space-y-2">
//             <label htmlFor="message" className="text-sm text-sentri-font-heading">
//               Message
//             </label>
//             <textarea
//               id="message"
//               name="message"
//               placeholder="Tell us about your needs: e.g. request budget + free trial"
//               value={formData.message || ''}
//               onChange={handleInputChange}
//               className="h-32 w-full resize-none rounded-md border border-[#333] bg-transparent p-2 text-white placeholder-sentri-font-body focus:border-white focus:ring-0"
//             />
//             <ValidationError
//               prefix="Message"
//               field="message"
//               errors={state.errors}
//               className="text-sm text-red-500"
//             />
//           </div>
//           <div className="flex justify-end">
//             <SubmitButton state={state} />
//           </div>
//         </form>
//       </div>
//     )
//   }
