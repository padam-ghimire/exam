import{W as h,j as t,a as m}from"./app-4906a150.js";import{A as j}from"./AuthenticatedLayout-e2fe1bf6.js";import{P as u}from"./Pagination-edae04da.js";import{B as s}from"./ButtonLink-32849cbd.js";import{D as p}from"./DangerButton-41a27b89.js";import"./ApplicationLogo-dd1431e4.js";import"./transition-f6131174.js";import"./index-056b968b.js";function D({auth:i,sections:a}){const l=[{title:"S.N"},{title:"Title"},{title:"Description"},{title:"Status"},{title:"Actions"}],{delete:n,get:d}=h({}),{data:r,links:c}=a,o=e=>{n(route("sections.destroy",e))},x=e=>{d(route("sections.status",e))};return t.jsxs(j,{user:i.user,header:t.jsx("h2",{className:"font-semibold text-xl text-gray-800 leading-tight",children:"Sections"}),children:[t.jsx(m,{title:"Sections"}),t.jsx("div",{className:"py-12",children:t.jsx("div",{className:"max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-6",children:t.jsx("div",{className:"overflow-x-auto",children:t.jsxs("section",{className:"p-4 sm:p-8 bg-white shadow sm:rounded-lg",children:[t.jsx(s,{href:route("sections.create"),className:"",children:"Add New"}),t.jsxs("table",{className:"table",children:[t.jsx("thead",{children:t.jsx("tr",{children:l.map(e=>t.jsx("th",{children:e.title},e.title))})}),t.jsx("tbody",{children:r.map(e=>t.jsxs("tr",{children:[t.jsx("td",{children:e.id}),t.jsx("td",{children:e.title}),t.jsx("td",{children:e.description.substring(0,75)}),t.jsx("td",{children:t.jsx("button",{onClick:()=>x(e.id),children:e.is_active?t.jsx("div",{className:"badge badge-primary",children:"Active"}):t.jsx("div",{className:"badge badge-secondary",children:"Inactive"})})}),t.jsxs("td",{className:"flex gap-1",children:[t.jsx(s,{className:"",href:route("sections.edit",e.id),children:"Edit"}),t.jsx(p,{onClick:()=>o(e.id),children:"Delete"})]})]},e.id))})]}),t.jsx(u,{links:c})]})})})})]})}export{D as default};
