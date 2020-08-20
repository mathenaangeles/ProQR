<template>
  <b-container fluid id="search">
    <b-row class="pt-4" align-v="center" align-h="center">
      <h2>Find supplies at your convenience</h2>
    </b-row>
    <b-row class="py-4" align-v="center" align-h="center">
      <b-col class="p-0" cols="3">
        <b-input-group>
          <b-input-group-prepend>
            <span class="input-group-text"
              ><b-icon icon="person-check-fill"></b-icon
            ></span>
          </b-input-group-prepend>
          <b-form-input placeholder="Search Keyword"></b-form-input>
        </b-input-group>
      </b-col>
      <b-col class="p-0" cols="3">
        <b-input-group>
          <b-input-group-prepend>
            <span class="input-group-text"
              ><b-icon icon="geo-alt"></b-icon
            ></span>
          </b-input-group-prepend>
          <b-form-input placeholder="Location"></b-form-input>
        </b-input-group>
      </b-col>
      <b-col class="p-0" cols="3">
        <b-input-group>
          <b-input-group-prepend>
            <span class="input-group-text"
              ><b-icon icon="house-fill"></b-icon
            ></span>
          </b-input-group-prepend>
          <b-form-select v-model="category" :options="options"></b-form-select>
        </b-input-group>
      </b-col>
      <b-col class="p-0" cols="2"
        ><b-button class="btn-block" variant="primary">Search</b-button></b-col
      >
    </b-row>
  </b-container>
</template>

<script>
export default {
  data() {
    return {
      supply: "",
      location: "",
      category: null,
      options: [
        { value: null, text: "Select a category" },
        {
          value: "Advertising Agency Services",
          text: "Advertising Agency Services",
        },
        { value: "Agricultural Chemicals", text: "Agricultural Chemicals" },
        {
          value: "Agricultural Machinery and Equipment",
          text: "Agricultural Machinery and Equipment",
        },
        {
          value: "Agricultural Products (Seeds, Seedlings, Plants..)",
          text: "Agricultural Products (Seeds, Seedlings, Plants..)",
        },
        {
          value: "Airconditioning and Airconditioning Systems",
          text: "Airconditioning and Airconditioning Systems",
        },
        {
          value: "Airconditioning Maintenance Services",
          text: "Airconditioning Maintenance Services",
        },
        {
          value: "Aircraft Spare Parts",
          text: "Aircraft Spare Parts",
        },
        {
          value: "Ammunitions and Explosives",
          text: "Ammunitions and Explosives",
        },
        {
          value: "Animal Feeds",
          text: "Animal Feeds",
        },
        {
          value: "Appliances",
          text: "Appliances",
        },
        {
          value: "Arts and Crafts Accessories and Supplies",
          text: "Arts and Crafts Accessories and Supplies",
        },
        {
          value: "Audio and Visual Equipment",
          text: "Audio and Visual Equipment",
        },
        {
          value: "Automation Equipment",
          text: "Automation Equipment",
        },
        {
          value: "Aviation Products",
          text: "Aviation Products",
        },
        {
          value: "Bedclothes, Linens and Towels",
          text: "Bedclothes, Linens and Towels",
        },
        {
          value: "Beverages",
          text: "Beverages",
        },
        {
          value: "Cargo Forwarding and Hauling Services",
          text: "Cargo Forwarding and Hauling Services",
        },
        {
          value: "Catering Services",
          text: "Catering Services",
        },
        {
          value: "Chemical Detergents",
          text: "Chemical Detergents",
        },
        {
          value: "Chemicals and Chemical Products",
          text: "Chemicals and Chemical Products",
        },
        {
          value: "Communication Equipment",
          text: "Communication Equipment",
        },
        {
          value: "Communication Equipment & Parts and Accessories",
          text: "Communication Equipment & Parts and Accessories",
        },
        {
          value: "Computer Furniture",
          text: "Computer Furniture",
        },
        {
          value: "Construction Equipment",
          text: "Construction Equipment",
        },
        {
          value: "Construction Management Services",
          text: "Construction Management Services",
        },
        {
          value: "Construction Materials and Supplies",
          text: "Construction Materials and Supplies",
        },
        {
          value: "Construction Projects",
          text: "Construction Projects",
        },
        {
          value: "Consulting Services",
          text: "Consulting Services",
        },
        {
          value: "Corporate Giveaways",
          text: "Corporate Giveaways",
        },
        {
          value: "Dairy Products",
          text: "Dairy Products",
        },
        {
          value: "Diagnostic and Laboratory Services",
          text: "Diagnostic and Laboratory Services",
        },
        {
          value: "Drugs and Medicines",
          text: "Drugs and Medicines",
        },
        {
          value: "Editorial, Design, Graphic and Fine Art Services",
          text: "Editorial, Design, Graphic and Fine Art Services",
        },
        {
          value: "Education and Training Services",
          text: "Education and Training Services",
        },
        {
          value: "Educational Materials and Supplies",
          text: "Educational Materials and Supplies",
        },
        {
          value: "Electrical Supplies",
          text: "Electrical Supplies",
        },
        {
          value: "Electrical Systems and Lighting Components",
          text: "Electrical Systems and Lighting Components",
        },
        {
          value: "Electronic Parts and Components",
          text: "Electronic Parts and Components",
        },
        {
          value: "Engineering and Laboratory Testing Equipment",
          text: "Engineering and Laboratory Testing Equipment",
        },
        {
          value: "Environmental Health/Safety Equipment",
          text: "Environmental Health/Safety Equipment",
        },
        {
          value: "Events Management",
          text: "Events Management",
        },
        {
          value: "Fertilizers",
          text: "Fertilizers",
        },
        {
          value: "Financial and Insurance Services",
          text: "Financial and Insurance Services",
        },
        {
          value: "Fire Fighting & Rescue and Safety Equipment",
          text: "Fire Fighting & Rescue and Safety Equipment",
        },
        {
          value: "Fixtures",
          text: "Fixtures",
        },
        {
          value: "Flags",
          text: "Flags",
        },
        {
          value: "Food Processing Equipment",
          text: "Food Processing Equipment",
        },
        {
          value: "Food Stuff",
          text: "Food Stuff",
        },
        {
          value: "Freight Forwarder Services",
          text: "Freight Forwarder Services",
        },
        {
          value: "Fuels/Fuel Additives & Lubricants & Anti Corrosive",
          text: "Fuels/Fuel Additives & Lubricants & Anti Corrosive",
        },
        {
          value: "Funeral and Associated Services",
          text: "Funeral and Associated Services",
        },
        {
          value: "Furniture",
          text: "Furniture",
        },
        {
          value: "Furniture Parts and Accessories",
          text: "Furniture Parts and Accessories",
        },
        {
          value: "Gaming Equipment and Paraphernalia",
          text: "Gaming Equipment and Paraphernalia",
        },
        {
          value: "Garments",
          text: "Garments",
        },
        {
          value: "General Contractor",
          text: "General Contractor",
        },
        {
          value: "General Engineering Services",
          text: "General Engineering Services",
        },
        {
          value: "General Merchandise",
          text: "General Merchandise",
        },
        {
          value: "General Repair and Maintenance Services",
          text: "General Repair and Maintenance Services",
        },
        {
          value: "Geotechnical Instrumentation",
          text: "Geotechnical Instrumentation",
        },
        {
          value: "Grocery Items",
          text: "Grocery Items",
        },
        {
          value: "Guns and Weapons",
          text: "Guns and Weapons",
        },
        {
          value: "Hardware and Construction Supplies",
          text: "Hardware and Construction Supplies",
        },
        {
          value: "Hospital / Medical Equipment",
          text: "Hospital / Medical Equipment",
        },
        {
          value: "Hospital / Medical Equipment Services",
          text: "Hospital / Medical Equipment Services",
        },
        {
          value: "Hotel and Lodging and Meeting Facilities",
          text: "Hotel and Lodging and Meeting Facilities",
        },
        {
          value: "Hydrological Instruments",
          text: "Hydrological Instruments",
        },
        {
          value: "Industrial Machinery and Equipment",
          text: "Industrial Machinery and Equipment",
        },
        {
          value: "Industrial Pumps and Compressors",
          text: "Industrial Pumps and Compressors",
        },
        {
          value: "Industrial Safety Equipment",
          text: "Industrial Safety Equipment",
        },
        {
          value: "Information Technology",
          text: "Information Technology",
        },
        {
          value: "Information Technology Parts & Accessories & Perip",
          text: "Information Technology Parts & Accessories & Perip",
        },
        {
          value: "Internet Services",
          text: "Internet Services",
        },
        {
          value: "Investigative Equipment",
          text: "Investigative Equipment",
        },
        {
          value: "IT Broadcasting and Telecommunications",
          text: "IT Broadcasting and Telecommunications",
        },
        {
          value: "Janitorial Equipment",
          text: "Janitorial Equipment",
        },
        {
          value: "Janitorial Services",
          text: "Janitorial Services",
        },
        {
          value: "Janitorial Supplies",
          text: "Janitorial Supplies",
        },
        {
          value: "Kitchenware",
          text: "Kitchenware",
        },
        {
          value: "Laboratory Supplies and Equipment",
          text: "Laboratory Supplies and Equipment",
        },
        {
          value: "Landscaping Services",
          text: "Landscaping Services",
        },
        {
          value: "Laundry Services",
          text: "Laundry Services",
        },
        {
          value: "Lease and Rental of Property or Building",
          text: "Lease and Rental of Property or Building",
        },
        {
          value: "Lifting Equipment and Accessories",
          text: "Lifting Equipment and Accessories",
        },
        {
          value: "Live Animals (Livestock, Birds, Live fish & etc..)",
          text: "Live Animals (Livestock, Birds, Live fish & etc..)",
        },
        {
          value: "Machine Tools",
          text: "Machine Tools",
        },
        {
          value: "Mail and Cargo Transport Services",
          text: "Mail and Cargo Transport Services",
        },
        {
          value: "Mailing Supplies",
          text: "Mailing Supplies",
        },
        {
          value: "Marine Transport",
          text: "Marine Transport",
        },
        {
          value: "Maritime Spare Parts",
          text: "Maritime Spare Parts",
        },
        {
          value: "Market Research Services",
          text: "Market Research Services",
        },
        {
          value: "Medical and Dental Equipment",
          text: "Medical and Dental Equipment",
        },
        {
          value: "Medical Supplies and Laboratory Instrument",
          text: "Medical Supplies and Laboratory Instrument",
        },
        {
          value: "Metal Fabrication",
          text: "Metal Fabrication",
        },
        {
          value: "Microfilm Equipment - Supplies and Accesories",
          text: "Microfilm Equipment - Supplies and Accesories",
        },
        {
          value: "Mining Equipment and Supplies",
          text: "Mining Equipment and Supplies",
        },
        {
          value: "Musical Instrument Parts and Accesories",
          text: "Musical Instrument Parts and Accesories",
        },
        {
          value: "Musical Instruments",
          text: "Musical Instruments",
        },
        {
          value: "Navigation Equipment",
          text: "Navigation Equipment",
        },
        {
          value: "Newspapers",
          text: "Newspapers",
        },
        {
          value: "Office Equipment",
          text: "Office Equipment",
        },
        {
          value: "Office Equipment Parts and Accessories",
          text: "Office Equipment Parts and Accessories",
        },
        {
          value: "Office Equipment Supplies and Consumables",
          text: "Office Equipment Supplies and Consumables",
        },
        {
          value: "Office Supplies and Devices",
          text: "Office Supplies and Devices",
        },
        {
          value: "Oil/Heat Chemical Resistant Rubber",
          text: "Oil/Heat Chemical Resistant Rubber",
        },
        {
          value: "Ordnance Products",
          text: "Ordnance Products",
        },
        {
          value: "Packaging Supplies and Materials",
          text: "Packaging Supplies and Materials",
        },
        {
          value: "Packed Food Distributor",
          text: "Packed Food Distributor",
        },
        {
          value: "Paper Materials and Products",
          text: "Paper Materials and Products",
        },
        {
          value: "Personal Care Products",
          text: "Personal Care Products",
        },
        {
          value: "Pest Control Products",
          text: "Pest Control Products",
        },
        {
          value: "Pest Control Services",
          text: "Pest Control Services",
        },
        {
          value: "Photographic Equipment",
          text: "Photographic Equipment",
        },
        {
          value: "Photographic Parts, Supplies and Accessories",
          text: "Photographic Parts, Supplies and Accessories",
        },
        {
          value: "Photography Services",
          text: "Photography Services",
        },
        {
          value: "Plastic Products",
          text: "Plastic Products",
        },
        {
          value: "Power Generation and Distribution Machinery",
          text: "Power Generation and Distribution Machinery",
        },
        {
          value: "Preserved or Processed Foods",
          text: "Preserved or Processed Foods",
        },
        {
          value: "Print and Broadcast and Aerial Advertising",
          text: "Print and Broadcast and Aerial Advertising",
        },
        {
          value: "Printing Services",
          text: "Printing Services",
        },
        {
          value: "Printing Supplies",
          text: "Printing Supplies",
        },
        {
          value: "Public Relations Programs or Services",
          text: "Public Relations Programs or Services",
        },
        {
          value: "Purses, Handbags and Bags",
          text: "Purses, Handbags and Bags",
        },
        {
          value: "Quartermaster Items",
          text: "Quartermaster Items",
        },
        {
          value: "Radiological/Diagnostic Equipment",
          text: "Radiological/Diagnostic Equipment",
        },
        {
          value: "Reproduction Services",
          text: "Reproduction Services",
        },
        {
          value: "Rice Milling Services",
          text: "Rice Milling Services",
        },
        {
          value: "Safety and Occupational Products",
          text: "Safety and Occupational Products",
        },
        {
          value: "Security Services",
          text: "Security Services",
        },
        {
          value: "Security Surveillance and Detection Equipment",
          text: "Security Surveillance and Detection Equipment",
        },
        {
          value: "Services",
          text: "Services",
        },
        {
          value: "Signage and Accessories",
          text: "Signage and Accessories",
        },
        {
          value: "Sporting Goods",
          text: "Sporting Goods",
        },
        {
          value: "Structured Cabling",
          text: "Structured Cabling",
        },
        {
          value: "Sub-Station Contractors",
          text: "Sub-Station Contractors",
        },
        {
          value: "Surveying Instruments",
          text: "Surveying Instruments",
        },
        {
          value: "Surveying Services",
          text: "Surveying Services",
        },
        {
          value: "Systems Integration",
          text: "Systems Integration",
        },
        {
          value: "Telecommunications Engineering",
          text: "Telecommunications Engineering",
        },
        {
          value: "Telecommunications Provider",
          text: "Telecommunications Provider",
        },
        {
          value: "Textiles",
          text: "Textiles",
        },
        {
          value: "Timepieces and Jewelry and Gemstone Products",
          text: "Timepieces and Jewelry and Gemstone Products",
        },
        {
          value: "Tokens and Awards",
          text: "Tokens and Awards",
        },
        {
          value: "Traffic Control Systems",
          text: "Traffic Control Systems",
        },
        {
          value: "Transmission and Distribution Lines",
          text: "Transmission and Distribution Lines",
        },
        {
          value: "Transportation and Communications Services",
          text: "Transportation and Communications Services",
        },
        {
          value: "Travel, Food, Lodging and Entertainment Services",
          text: "Travel, Food, Lodging and Entertainment Services",
        },
        {
          value: "Vehicle Parts and Accessories",
          text: "Vehicle Parts and Accessories",
        },
        {
          value: "Vehicle Repair and Maintenance",
          text: "Vehicle Repair and Maintenance",
        },
        {
          value: "Vehicles",
          text: "Vehicles",
        },
        {
          value: "Veterinary Products and Supplies",
          text: "Veterinary Products and Supplies",
        },
        {
          value: "Video Production Services",
          text: "Video Production Services",
        },
        {
          value: "Waste Management and Recycling",
          text: "Waste Management and Recycling",
        },
        {
          value: "Water and Waste Water Treatment Supply & Disposal",
          text: "Water and Waste Water Treatment Supply & Disposal",
        },
        {
          value: "Water Service Connection Materials/Fittings",
          text: "Water Service Connection Materials/Fittings",
        },
        {
          value: "Well Drilling and Construction Services",
          text: "Well Drilling and Construction Services",
        },
      ],
    };
  },
  methods: {
    getSupplier(supplier_id) {
      var supplier = this.$store.state.users.filter(
        (user) => user.id == supplier_id
      )[0];
      return supplier;
    },
  },
};
</script>
<style scoped>
#search {
  background-color: #7395ae;
  max-height: 200px;
  border-bottom: 5px solid white;
}
.form-control,
.btn,
.input-group-text {
  border-radius: 0;
}
.input-group-text {
  background-color: #5d5c61;
  color: white;
  border: 0;
}
h2 {
  font-family: "Raleway", sans-serif !important;
  color: white;
  font-weight: bold;
  padding-bottom: 5px;
  border-bottom: 3px solid white;
}
</style>
