import{W as f,j as e,a as N}from"./app-4906a150.js";import{I as l,T as m}from"./TextInput-1bd598db.js";import{I as o}from"./InputLabel-297f5972.js";import{P as y}from"./PrimaryButton-b1799f9b.js";import{T as _}from"./TextArea-e650903f.js";import{A as b}from"./AuthenticatedLayout-e2fe1bf6.js";import{S as w}from"./react-select.esm-a84e6776.js";import{$ as T}from"./transition-f6131174.js";import"./ApplicationLogo-dd1431e4.js";import"./index-056b968b.js";const $=({auth:c,exam:s,sections:d})=>{const u={title:s.title,description:s.description,expiry_date:s.expiry_date,total_time:s.total_time,sections:[]},{data:r,setData:a,patch:p,errors:i,processing:x,recentlySuccessful:h}=f(u),j=t=>{t.preventDefault(),p(route("exams.update",s.id))},v=d.map(t=>({value:t.id,label:t.title}));return e.jsxs(b,{user:c.user,header:e.jsx("h2",{className:"font-semibold text-xl text-gray-800 leading-tight",children:"Sections"}),children:[e.jsx(N,{title:"Create | Questions"}),e.jsx("div",{className:"py-12",children:e.jsx("div",{className:"max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-6",children:e.jsx("div",{className:"overflow-x-auto",children:e.jsx("section",{className:"p-4 sm:p-8 bg-white shadow sm:rounded-lg",children:e.jsxs("form",{onSubmit:j,className:"mt-6 space-y-6",children:[e.jsxs("div",{children:[e.jsx(w,{defaultValue:[],isMulti:!0,name:"colors",options:v,className:"lg:w-1/2 w-full",classNamePrefix:"select",onChange:t=>{const n=t.map(g=>g.value);a("sections",n)}}),e.jsx(l,{className:"mt-2",message:i.sections})]}),e.jsxs("div",{children:[e.jsx(o,{htmlFor:"title",value:"Title"}),e.jsx(m,{id:"title",className:"mt-1 block w-full",value:r.title,onChange:t=>a("title",t.target.value),required:!0,isFocused:!0,autoComplete:"title"}),e.jsx(l,{className:"mt-2",message:i.title})]}),e.jsxs("div",{children:[e.jsx(o,{htmlFor:"total_time",value:"Total Time"}),e.jsx(m,{type:"number",id:"total_time",className:"mt-1 block w-full",value:r.total_time,onChange:t=>a("total_time",parseInt(t.target.value)),required:!0,isFocused:!0,autoComplete:"total_time"}),e.jsx(l,{className:"mt-2",message:i.title})]}),e.jsxs("div",{children:[e.jsx(o,{htmlFor:"expiry_date",value:"Total Time"}),e.jsx(m,{type:"date",id:"expiry_date",className:"mt-1 block w-full",value:r.expiry_date,onChange:t=>a("expiry_date",t.target.value),required:!0,isFocused:!0,autoComplete:"expiry_date"}),e.jsx(l,{className:"mt-2",message:i.title})]}),e.jsxs("div",{children:[e.jsx(o,{htmlFor:"description",value:"Description"}),e.jsx(_,{id:"description",className:"mt-1 block w-full",value:r.description,onChange:t=>a("description",t.target.value),required:!0}),e.jsx(l,{className:"mt-2",message:i.description})]}),e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx(y,{disabled:x,children:"Save"}),e.jsx(T,{show:h,enter:"transition ease-in-out",enterFrom:"opacity-0",leave:"transition ease-in-out",leaveTo:"opacity-0",children:e.jsx("p",{className:"text-sm text-gray-600",children:"Saved."})})]})]})})})})})]})};export{$ as default};