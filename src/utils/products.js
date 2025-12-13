import sonoScape from "@/assets/images/products/medicalImaging/ultra-sound.webp";
import medicalEquipment from "@/assets/images/products/medicalEquipment/medical-equipment.webp";
import runyes from "@/assets/images/products/sterilizationEquipment/runyes.webp";
import autoClave from "@/assets/images/products/sterilizationEquipment/auto-clave.webp";
import woson from "@/assets/images/products/sterilizationEquipment/woson.webp";
import piezo from "@/assets/images/products/dentalParts/piezo.webp";
import turbine from "@/assets/images/products/dentalParts/turbine.webp";
import asiga from "@/assets/images/products/dentalLab/asiga.webp";
import alinger from "@/assets/images/products/dentalLab/alinger.webp";
import implant from "@/assets/images/products/dentalImplants/implant.webp";
import dte from "@/assets/images/products/dentalImaging/dte.webp";
import portableHandle from "@/assets/images/products/dentalImaging/portable.webp";
import digitalSensor from "@/assets/images/products/dentalImaging/digital-dental.webp";
import mayar from "@/assets/images/products/dentalImaging/mayar.webp";
import dentalScanner from "@/assets/images/products/dentalImaging/dental-scanner.webp";
import vitaro from "@/assets/images/products/dentalImaging/vitaro.webp";
import dentalXRay from "@/assets/images/products/dentalImaging/dental-x-ray.webp";
import intraoral from "@/assets/images/products/dentalImaging/intraoral.webp";
import headLight from "@/assets/images/products/dentalEquipment/head-light.webp";
import dentalLoupes from "@/assets/images/products/dentalEquipment/loupes.webp";
import apex from "@/assets/images/products/dentalEquipment/apex.webp";
import apexPixi from "@/assets/images/products/dentalEquipment/apex-pixi.webp";
import alladin from "@/assets/images/products/dentalEquipment/alladin.webp";
import completeDental from "@/assets/images/products/dentalEquipment/complete-dental.webp";
import dacChair from "@/assets/images/products/dentalEquipment/dac-chair.webp";
import dentalOperatory from "@/assets/images/products/dentalEquipment/dental-operatory.webp";
import modernDental from "@/assets/images/products/dentalEquipment/moder-dental.webp";
import rotar from "@/assets/images/products/dentalEquipment/rotar.webp";
import cordLess from "@/assets/images/products/dentalEquipment/cordless.webp";
import cordLessWarm from "@/assets/images/products/dentalEquipment/cordless-warm.webp";
import kavo from "@/assets/images/products/dentalEquipment/kavo.webp";
import dteEndor from "@/assets/images/products/dentalEquipment/dte-endor.webp";

export const PRODUCTS = [
  {
    title: "Medical Imaging",
    key: "medicalImaging",
    items: [
      {
        id: 1,
        title: "Portable Ultrasound System with Doppler",
        description:
          "State-of-the-art portable ultrasound system featuring advanced Doppler imaging capabilities for superior blood flow visualization and analysis. The compact laptop-like design with integrated keyboard and high-definition display provides exceptional portability and user-friendly operation. Suitable for vascular imaging, cardiology, emergency medicine, and general diagnostics. Features Color Doppler overlay and detailed spectral Doppler waveforms with velocity measurements for comprehensive hemodynamic assessment.",
        image: sonoScape,
        certifications: ["CE", "ISO 13485", "FDA"],
        specifications: [
          {
            title: "Imaging modes",
            text: "B-mode, Color Doppler, Spectral Doppler",
          },
          {
            title: "Display",
            text: "High-definition screen with flip-up design",
          },
          {
            title: "Interface",
            text: "Integrated full-function keyboard",
          },
          {
            title: "Portability",
            text: "Laptop-style with carry handle",
          },
          {
            title: "Applications",
            text: "Vascular, cardiology, emergency, general diagnostics",
          },
          {
            title: "Doppler",
            text: "Real-time blood flow velocity and direction",
          },
          {
            title: "Parameters",
            text: "FPS, PRF, Gain, Depth adjustable",
          },
          {
            title: "Design",
            text: "Compact and mobile",
          },
        ],
      },
    ],
  },
  {
    title: "Medical Equipment",
    key: "medicalEquipment",
    items: [
      {
        id: 2,
        title: "Automated Blood Pressure Monitoring Station",
        description:
          "Sophisticated automated blood pressure monitoring station designed for precision, mobility, and ease of use in modern healthcare settings. Features state-of-the-art automated cuff system utilizing advanced oscillometric technology for accurate systolic and diastolic readings. The intuitive high-definition touchscreen display serves as the command center for effortless operation. Mounted on a sturdy mobile pedestal base with smooth-gliding casters for maximum flexibility. Ideal for clinics, hospitals, pharmacies, and health screening centers.",
        image: medicalEquipment,
        specifications: [
          {
            title: "Measurement",
            text: "Automated oscillometric blood pressure",
          },
          {
            title: "Display",
            text: "High-definition touchscreen interface",
          },
          {
            title: "Mobility",
            text: "Wheeled pedestal base with casters",
          },
          {
            title: "Cuff System",
            text: "Automatic inflation and deflation",
          },
          {
            title: "Data Management",
            text: "Digital storage and EHR integration capability",
          },
          {
            title: "Ergonomics",
            text: "Adjustable display and cuff positioning",
          },
          {
            title: "Materials",
            text: "Medical-grade, easy-to-clean surfaces",
          },
          {
            title: "Applications",
            text: "Clinics, hospitals, pharmacies, wellness programs",
          },
        ],
        certifications: ["CE", "ISO 13485", "FDA"],
      },
    ],
  },
  {
    title: "Sterilization Equipment",
    key: "sterilizationEquipment",
    items: [
      {
        id: 3,
        title: "Dental Autoclave Sterilizer",
        description:
          "Tabletop dental autoclave with digital display and programmable controls. Features circular stainless steel chamber with multiple racks, hinged door with blue handle, USB connectivity, and power control. Provides reliable steam sterilization at 121°C or 134°C for surgical and dental instruments.",
        image: runyes,
        specifications: [
          {
            title: "Chamber",
            text: "Circular stainless steel with racks",
          },
          {
            title: "Display",
            text: "Digital LCD with cycle status",
          },
          {
            title: "Controls",
            text: "Button panel with programmable cycles",
          },
          {
            title: "Door",
            text: "Hinged with blue handle and latch",
          },
          {
            title: "Connectivity",
            text: "USB ports, water connections",
          },
          {
            title: "Power",
            text: "Green rocker switch",
          },
          {
            title: "Design",
            text: "Benchtop model with ventilation grilles",
          },
        ],
        certifications: ["CE", "ISO 13485"],
      },
      {
        id: 4,
        title: "Dental Autoclave with Handpiece Cleaner System",
        description:
          "Modern dental autoclave with color touchscreen interface and integrated handpiece flushing system. Features front-loading stainless steel chamber with multiple racks, digital cycle control, water reservoir, and pre-sterilization cleaning attachment. Ensures comprehensive instrument sterilization and reprocessing.",
        image: autoClave,
        specifications: [
          {
            title: "Chamber",
            text: "Stainless steel front-loading",
          },
          {
            title: "Interface",
            text: "Color touchscreen control panel",
          },
          {
            title: "Racks",
            text: "Multiple stainless steel trays",
          },
          {
            title: "Cleaning System",
            text: "Integrated handpiece flushing with spray nozzle",
          },
          {
            title: "Reservoir",
            text: "Side-mounted water/filtration system",
          },
          {
            title: "Ventilation",
            text: "Multiple grilles for heat dissipation",
          },
          {
            title: "Design",
            text: "Countertop white unit with modern aesthetic",
          },
        ],
        certifications: ["CE", "ISO 13485"],
      },
      {
        id: 5,
        title: "Professional Dental Autoclave",
        description:
          "Class B dental autoclave with advanced digital control panel. Features multiple sterilization programs (Unwrapped, Wrapped, Prion, Porous), adjustable temperatures (134°C, 121°C), vacuum and drying cycles, stainless steel chamber with multiple racks, and clear digital displays for temp, pressure, and time monitoring.",
        image: woson,
        specifications: [
          {
            title: "Class",
            text: "Class B",
          },
          {
            title: "Programs",
            text: "Unwrapped, Wrapped, Prion, Porous",
          },
          {
            title: "Temperatures",
            text: "121°C, 134°C selectable",
          },
          {
            title: "Cycles",
            text: "Vacuum, Sterilization, Drying",
          },
          {
            title: "Display",
            text: "Digital temp, pressure, time readouts",
          },
          {
            title: "Chamber",
            text: "Stainless steel with multiple racks",
          },
          {
            title: "Safety",
            text: "Hot surface warning, secure door lock",
          },
        ],
        certifications: ["CE", "ISO 13485"],
      },
    ],
  },
  {
    title: "Dental Parts & Accessories",
    key: "dentalPartsAndAccessories",
    items: [
      {
        id: 6,
        title: "Piezo Bone Surgery Tips Kit",
        description:
          "Comprehensive piezo bone surgery tips kit with gold-coated titanium tips for ultrasonic bone cutting. Includes multiple curved tip configurations, stainless steel storage racks with silicone inserts, sterilization cassettes, and individual blister packaging for precise oral surgical procedures.",
        image: piezo,
        specifications: [
          {
            title: "Coating",
            text: "Gold (likely titanium nitride)",
          },
          {
            title: "Material",
            text: "Stainless steel with TiN coating",
          },
          {
            title: "Tip Designs",
            text: "Various curved configurations",
          },
          {
            title: "Storage",
            text: "Stainless racks with blue silicone inserts",
          },
          {
            title: "Sterilization",
            text: "Autoclavable cassettes included",
          },
          {
            title: "Packaging",
            text: "Individual blister packs",
          },
          {
            title: "Applications",
            text: "Bone grafting, sinus lifts, ridge augmentation, extractions",
          },
        ],
        certifications: ["CE", "ISO 13485"],
      },
      {
        id: 7,
        title: "Dental Turbine Rotor Assembly Kit",
        description:
          "Professional replacement rotor assembly for dental turbine handpieces. Complete kit includes air-driven impeller rotor, high-precision ball bearings, O-ring seals, and spacers. Designed for high-speed performance with minimal vibration and friction.",
        image: turbine,
        specifications: [
          {
            title: "Components",
            text: "Rotor, 2x ball bearings, O-ring, spacers",
          },
          {
            title: "Rotor_design",
            text: "Multi-blade air impeller",
          },
          {
            title: "Bearings",
            text: "High-precision high-speed rated",
          },
          {
            title: "Material",
            text: "Stainless steel/metal alloy",
          },
          {
            title: "Sealing",
            text: "O-ring and gasket system",
          },
          {
            title: "Compatibility",
            text: "Standard dental turbine handpieces",
          },
          {
            title: "Rpm_rating",
            text: "Suitable for 300,000+ RPM",
          },
          {
            title: "applications",
            text: "Turbine maintenance and repair",
          },
        ],
        certifications: ["CE", "ISO 13485"],
      },
    ],
  },
  {
    title: "Dental Lab Equipment",
    key: "dentalLabEquipment",
    items: [
      {
        id: 8,
        title: "Dental 3D Printer (DLP/SLA)",
        description:
          "Professional desktop 3D printer with red translucent UV-filtering cover for high-resolution dental applications. Features touchscreen interface with Print, Control, Settings, and Maintenance menus. Ideal for fabricating dental models, surgical guides, crowns, bridges, and orthodontic appliances.",
        image: asiga,
        specifications: [
          {
            title: "Technology",
            text: "DLP/SLA resin-based 3D printing",
          },
          {
            title: "Cover",
            text: "Red UV-filtering translucent enclosure",
          },
          {
            title: "Interface",
            text: "Color touchscreen with Main Menu",
          },
          {
            title: "Build Chamber",
            text: "Enclosed with visible build platform",
          },
          {
            title: "Connectivity",
            text: "USB port for data transfer",
          },
          {
            title: "Applications",
            text: "Models, guides, crowns, aligners, dentures",
          },
          {
            title: "Form Factor",
            text: "Compact desktop unit",
          },
        ],
        certifications: ["CE", "ISO 13485"],
      },
      {
        id: 9,
        title: "Dental Aligner Vacuum Forming Machine",
        description:
          "Professional vacuum forming and pressing machine for fabricating custom clear dental aligners. Features red and black housing with heating element, removable clear forming tray, temperature/pressure controls, and white base unit. Essential for orthodontic aligner production.",
        image: alinger,
        specifications: [
          {
            title: "Process",
            text: "Vacuum forming/thermoforming",
          },
          {
            title: "Chamber",
            text: "Removable clear tray with handles",
          },
          {
            title: "Heating",
            text: "Top-mounted heating element",
          },
          {
            title: "Controls",
            text: "Temperature and pressure dial",
          },
          {
            title: "Materials",
            text: "Thermoplastic aligner sheets",
          },
          {
            title: "Applications",
            text: "Clear aligners, retainers, mouthguards",
          },
          {
            title: "Design",
            text: "Red/black professional housing",
          },
          {
            title: "Base Unit",
            text: "White with motor and controls",
          },
        ],
        certifications: ["CE", "ISO 13485"],
      },
    ],
  },
  {
    title: "Dental Implants",
    key: "dentalImplants",
    items: [
      {
        id: 10,
        title: "Dental Implant Abutment Screw Set",
        description:
          "Precision dental implant abutment screws for connecting implant fixtures to prosthetic restorations. Manufactured from biocompatible titanium with threaded design for secure attachment. Essential component for dental implantology procedures.",
        image: implant,
        specifications: [
          {
            title: "Material",
            text: "Medical grade titanium alloy",
          },
          {
            title: "Design",
            text: "Threaded shaft with retention head",
          },
          {
            title: "Compatibility",
            text: "Universal implant platforms",
          },
          {
            title: "Surface",
            text: "Precision machined finish",
          },
          {
            title: "Seal",
            text: "Integrated O-ring sealing",
          },
          {
            title: "Applications",
            text: "Crown, bridge, denture attachment",
          },
          {
            title: "Packaging",
            text: "Sterile individual packaging",
          },
          {
            title: "Sizes",
            text: "Multiple lengths and diameters available",
          },
        ],
        certifications: ["CE", "ISO 13485", "FDA"],
      },
    ],
  },
  {
    title: "Dental Imaging",
    key: "dentalImaging",
    items: [
      {
        id: 11,
        title: "i-SCAN Intraoral Scanner",
        description:
          "Advanced digital impression system with large color touchscreen interface. Features intuitive menu with Patient Card, Register, Settings, Images, and Scan functions. Captures high-resolution 3D digital models for restorative dentistry, orthodontics, and patient communication. Includes memory management and real-time scan display.",
        image: dte,
        specifications: [
          {
            title: "Model",
            text: "i-SCAN",
          },
          {
            title: "Interface",
            text: "Large color touchscreen (7-10 inch)",
          },
          {
            title: "Functions",
            text: "Patient Card, Register, Settings, Images, Scan",
          },
          {
            title: "Memory",
            text: "Digital storage with usage indicators",
          },
          {
            title: "Design",
            text: "Compact white and gold desktop unit",
          },
          {
            title: "Applications",
            text: "Digital impressions, crowns, bridges, aligners, surgical guides",
          },
          {
            title: "Connectivity",
            text: "USB, Wi-Fi, Ethernet (implied)",
          },
        ],
        certifications: ["CE", "ISO 13485", "FDA"],
      },
      {
        id: 12,
        title: "Portable Handheld Dental X-ray with Display",
        description:
          "Innovative portable handheld dental X-ray unit with integrated digital display for immediate image visualization. Features adjustable exposure settings (60kV, 0.36s), comprehensive control panel with multiple imaging modes, collimator cone for beam direction, READY indicator, and ergonomic handle. Eliminates need for separate sensors and monitors.",
        image: portableHandle,
        specifications: [
          {
            title: "Design",
            text: "Portable handheld with integrated display",
          },
          {
            title: "Kilovoltage",
            text: "60kV (adjustable)",
          },
          {
            title: "Exposure Time",
            text: "0.36s (adjustable)",
          },
          {
            title: "Display",
            text: "Digital screen for real-time imaging",
          },
          {
            title: "Controls",
            text: "Comprehensive button panel",
          },
          {
            title: "Collimator",
            text: "Cylindrical cone for beam direction",
          },
          {
            title: "Applications",
            text: "Intraoral radiography, caries detection",
          },
        ],
        certifications: ["CE", "ISO 13485", "FDA"],
      },
      {
        id: 13,
        title: "Digital Dental Sensor with Touchscreen",
        description:
          "Advanced digital dental sensor/detector with color touchscreen interface. Features exposure time display (0.160s), calibrated for 70kV 3mA X-ray parameters, multiple imaging modes with Chinese/English interface, and patient/tooth-specific settings. Combines radiation measurement and digital image capture for quality assurance and diagnosis.",
        image: digitalSensor,
        specifications: [
          {
            title: "Display",
            text: "Color touchscreen with icon-based UI",
          },
          {
            title: "Exposure Measurement",
            text: "0.160s displayed",
          },
          {
            title: "X-ray Parameters",
            text: "70kV, 3mA compatible",
          },
          {
            title: "Modes",
            text: "Multiple imaging profiles with patient/tooth icons",
          },
          {
            title: "Design",
            text: "Compact with lens detector component",
          },
          {
            title: "Applications",
            text: "Digital dental imaging, exposure verification, QA",
          },
        ],
        certifications: ["CE", "ISO 13485"],
      },
      {
        id: 14,
        title: "Portable Digital X-ray Imaging System",
        description:
          "Complete portable digital X-ray system with generator, digital detector plate, and laptop display. Features adjustable collimator with control knobs, comprehensive button panel for exposure settings, immediate digital output for chest and body imaging. Ideal for point-of-care diagnostics in emergency rooms, ICUs, mobile units, and veterinary applications.",
        image: mayar,
        specifications: [
          {
            title: "Generator",
            text: "Portable X-ray with handle",
          },
          {
            title: "Detector",
            text: "Digital flat panel with grid lines",
          },
          {
            title: "Display",
            text: "Laptop with immediate image viewing",
          },
          {
            title: "Controls",
            text: "Multi-button panel with digital displays",
          },
          {
            title: "Collimator",
            text: "Adjustable beam size with knobs",
          },
          {
            title: "Applications",
            text: "Point-of-care, emergency, ICU, mobile diagnostics",
          },
        ],
        certifications: ["CE", "ISO 13485"],
      },
      {
        id: 15,
        title: "Professional Dental Intraoral Scanner (Blue)",
        description:
          "Modern blue and white intraoral scanner with integrated orthodontic software. Features ergonomic pen-like handpiece design, wired connectivity with docking station, software with 3D tooth rendering and color-coded accuracy mapping. Ideal for digital impressions, orthodontic treatment planning, clear aligner fabrication, and treatment monitoring.",
        image: dentalScanner,
        specifications: [
          {
            title: "Design",
            text: "Ergonomic pen-like handpiece",
          },
          {
            title: "Color",
            text: "Blue body with white scanning tip",
          },
          {
            title: "Connectivity",
            text: "Wired with charging dock",
          },
          {
            title: "Software",
            text: "3D rendering with orthodontic module",
          },
          {
            title: "Features",
            text: "Color accuracy map, scan review, export options",
          },
          {
            title: "Docking Station",
            text: "Gray base with charging",
          },
          {
            title: "Applications",
            text: "Digital impressions, orthodontics, aligners, restoration",
          },
        ],
        certifications: ["CE", "ISO 13485", "FDA"],
      },
      {
        id: 16,
        title: "Portable Dental X-ray Unit",
        description:
          "Portable dental X-ray unit with digital display with 60kV and 2mA settings, 0.35s exposure time, battery-powered operation, tooth and patient positioning icons, radiation safety indicator, and intuitive button controls. Compact design for intraoral radiography, caries detection, and dental diagnostics.",
        image: vitaro,
        specifications: [
          {
            title: "Kilovoltage",
            text: "60kV",
          },
          {
            title: "Current",
            text: "2mA",
          },
          {
            title: "Exposure Time",
            text: "0.35s",
          },
          {
            title: "Power",
            text: "Battery-powered (icon visible)",
          },
          {
            title: "Display",
            text: "Digital LCD with icons",
          },
          {
            title: "Controls",
            text: "Button interface with mode selection",
          },
        ],
        certifications: ["CE", "ISO 13485", "FDA"],
      },
      {
        id: 17,
        title: "Portable Dental X-ray Unit with Digital Display",
        description:
          "Compact and lightweight portable dental X-ray unit designed for exceptional mobility and ease of use. Features a vibrant digital display showing adjustable voltage (60kV), precise exposure times (adjustable to 2.00s), and intuitive control panel with pre-set imaging modes for various dental applications. The integrated carrying strap enhances portability, making it ideal for multi-operatory practices and mobile dental services. Battery-powered for cordless freedom and versatile deployment.",
        image: dentalXRay,
        specifications: [
          {
            title: "Voltage",
            text: "60kV",
          },
          {
            title: "Exposure Time",
            text: "Adjustable up to 2.00s",
          },
          {
            title: "Display",
            text: "Digital LCD with parameter display",
          },
          {
            title: "Interface",
            text: "Button control panel with mode icons",
          },
          {
            title: "Portability",
            text: "Integrated carrying strap",
          },
          {
            title: "Power",
            text: "Battery-powered operation",
          },
          {
            title: "Imaging Modes",
            text: "Pre-programmed for anterior, posterior, and bitewing",
          },
          {
            title: "Indicators",
            text: "READY and EXPOSURE status lights",
          },
        ],
        certifications: ["CE", "ISO 13485", "FDA"],
      },
      {
        id: 18,
        title: "Handheld Intraoral Dental X-Ray Unit",
        description:
          "Ergonomic handheld intraoral dental X-ray unit with portable design for comfortable operation and precise positioning. Features digital LCD screen with user-friendly button interface for quick selection of optimal exposure settings. The lightweight, compact, and fully integrated design makes it exceptionally portable and easy to maneuver. Ideal for intraoral imaging applications including caries detection, periodontal assessment, endodontic evaluations, and pre-implant diagnostics.",
        image: intraoral,
        specifications: [
          {
            title: "Design",
            text: "Handheld portable unit",
          },
          {
            title: "Display",
            text: "Digital LCD screen",
          },
          {
            title: "Controls",
            text: "Tactile buttons for exposure settings",
          },
          {
            title: "Indicators",
            text: "READY and Exposure status",
          },
          {
            title: "Power",
            text: "Rechargeable battery",
          },
          {
            title: "Ergonomics",
            text: "Comfortable grip handle",
          },
          {
            title: "Collimator",
            text: "Focused X-ray beam emission",
          },
          {
            title: "Applications",
            text: "Caries, periodontal, endodontic, implant imaging",
          },
        ],
        certifications: ["CE", "ISO 13485", "FDA"],
      },
    ],
  },
  {
    title: "Dental Equipment",
    key: "dentalEquipment",
    items: [
      {
        id: 19,
        title: "Dental Headlight with Magnification Loupes",
        description:
          "Professional head-mounted LED illumination system with integrated magnification loupes for enhanced visualization during dental procedures. Features adjustable headband, dual LED lights, and interchangeable magnifying lenses for optimal precision.",
        image: headLight,
        specifications: [
          {
            title: "LED Lights",
            text: "Dual LED adjustable lights",
          },
          {
            title: "Magnification",
            text: "2.5x, 3.5x, 4.5x (interchangeable)",
          },
          {
            title: "Working Distance",
            text: "340mm - 520mm",
          },
          {
            title: "Battery",
            text: "Rechargeable lithium 5000mAh",
          },
          {
            title: "LED Brightness",
            text: "High-intensity white LED",
          },
          {
            title: "Headband",
            text: "Adjustable padded headband",
          },
          {
            title: "Weight",
            text: "250g complete system",
          },
          {
            title: "Lenses",
            text: "Multiple magnification options included",
          },
        ],
        certifications: ["CE", "ISO 13485"],
      },
      {
        id: 20,
        title: "Professional Dental Loupes Set",
        description:
          "Precision dental loupes with multiple mounting options. Available with integrated LED illumination for shadow-free visibility. Perfect for restorative dentistry, surgery, and detailed examination work.",
        image: dentalLoupes,
        specifications: [
          {
            title: "Magnification",
            text: "2.5x, 3.5x, 4.5x, 5.5x options",
          },
          {
            title: "Mounting",
            text: "Spectacle frame or headband mount",
          },
          {
            title: "Illumination",
            text: "Optional integrated LED system",
          },
          {
            title: "Optics",
            text: "High-quality optical glass",
          },
          {
            title: "Adjustment",
            text: "Fully adjustable angle and distance",
          },
          {
            title: "Weight",
            text: "85g - 150g depending on model",
          },
          {
            title: "Field of View",
            text: "80mm - 120mm",
          },
        ],
        certifications: ["CE", "ISO 13485"],
      },
      {
        id: 21,
        title: "Digital Apex Locator",
        description:
          "Advanced electronic apex locator with large touchscreen display for precise root canal length measurement. Features intuitive interface with visual and audible feedback for accurate endodontic procedures.",
        image: apex,
        specifications: [
          {
            title: "Display",
            text: "Large color touchscreen",
          },
          {
            title: "Measurement Accuracy",
            text: "±0.5mm",
          },
          {
            title: "Interface",
            text: "Touch-based navigation",
          },
          {
            title: "Controls",
            text: "Settings menu and directional controls",
          },
          {
            title: "Feedback",
            text: "Visual display and audible alerts",
          },
          {
            title: "Design",
            text: "Portable standalone unit",
          },
          {
            title: "Applications",
            text: "Root canal therapy, endodontics",
          },
          {
            title: "Connectivity",
            text: "USB port for charging/data",
          },
        ],
        certifications: ["CE", "ISO 13485", "FDA"],
      },
      {
        id: 22,
        title: "Electronic Apex Locator",
        description:
          "Electronic apex locator with multi-segment digital display. Provides precise canal length measurements with color-coded visual feedback and numerical scale for successful endodontic treatment.",
        image: apexPixi,
        specifications: [
          {
            title: "Display Type",
            text: "Multi-segment digital with color bars",
          },
          {
            title: "Measurement Scale",
            text: "0.0 - 2.0mm gradients",
          },
          {
            title: "Visual Indicators",
            text: "Yellow to blue progression bars",
          },
          {
            title: "Audio Feedback",
            text: "Integrated speaker alerts",
          },
          {
            title: "Accuracy",
            text: "High precision impedance measurement",
          },
          {
            title: "Design",
            text: "Compact handheld unit",
          },
          {
            title: "Battery",
            text: "Rechargeable with charging port",
          },
        ],
        certifications: ["CE", "ISO 13485", "FDA"],
      },
      {
        id: 23,
        title: "LED Curing Light",
        description:
          "Cordless LED dental curing light for polymerizing composite resins and bonding materials. Features digital display, multiple curing modes, adjustable timer, and ergonomic handheld design for efficient restorative procedures.",
        image: alladin,
        specifications: [
          {
            title: "Light Type",
            text: "High-intensity LED",
          },
          {
            title: "Wavelength",
            text: "420-480nm",
          },
          {
            title: "Intensity",
            text: "Adjustable power modes",
          },
          {
            title: "Display",
            text: "Digital LCD screen",
          },
          {
            title: "Controls",
            text: "Mode (M) and Timer (T) buttons",
          },
          {
            title: "Design",
            text: "Cordless handheld pen-style",
          },
          {
            title: "Battery",
            text: "Rechargeable lithium-ion",
          },
          {
            title: "Applications",
            text: "Composite curing, bonding, sealants",
          },
        ],
        certifications: ["CE", "ISO 13485"],
      },
      {
        id: 24,
        title: "Wireless Endodontic Rotary System",
        description:
          "Professional wireless motor-driven endodontic handpiece system for root canal procedures. Features angled handpiece with rotary file mechanism, separate control unit with speed/torque settings, and foot pedal operation. Designed for precision endodontic treatment with minimal cable clutter.",
        image: rotar,
        specifications: [
          {
            title: "Handpiece",
            text: "Angled metallic with ergonomic grip",
          },
          {
            title: "Power",
            text: "Wireless/battery-powered operation",
          },
          {
            title: "Control Unit",
            text: "Digital with speed and torque control",
          },
          {
            title: "Foot Pedal",
            text: "Hands-free activation included",
          },
          {
            title: "Applications",
            text: "Rotary endodontics, root canal shaping",
          },
          {
            title: "File Compatibility",
            text: "Standard rotary endodontic files",
          },
          {
            title: "Features",
            text: "Auto-reverse, torque control",
          },
          {
            title: "Design",
            text: "Compact integrated system",
          },
        ],
        certifications: ["CE", "ISO 13485", "FDA"],
      },
      {
        id: 25,
        title: "Cordless Endodontic Obturation Gun",
        description:
          "Professional cordless obturation gun for root canal therapy. Features ergonomic design, angled delivery tip for posterior access, digital temperature control, and rechargeable battery. Delivers heated gutta-percha for precise canal filling and sealing.",
        image: cordLess,
        specifications: [
          {
            title: "Power",
            text: "Cordless rechargeable battery",
          },
          {
            title: "Tip Design",
            text: "Angled for posterior access",
          },
          {
            title: "Tip Color",
            text: "Green disposable/replaceable",
          },
          {
            title: "Controls",
            text: "Digital temperature and flow control",
          },
          {
            title: "Applications",
            text: "Root canal obturation with gutta-percha",
          },
          {
            title: "Design",
            text: "Ergonomic cylindrical handle",
          },
          {
            title: "Features",
            text: "Precision filling, temperature controlled",
          },
        ],
        certifications: ["CE", "ISO 13485", "FDA"],
      },
      {
        id: 26,
        title: "Cordless Warm Vertical Condensation Device",
        description:
          "Advanced cordless obturation device for warm vertical condensation and continuous wave root canal filling. Features contra-angle design with fine heated applicator tip, battery operation, and precision temperature control for optimal gutta-percha delivery.",
        image: cordLessWarm,
        specifications: [
          {
            title: "Technique",
            text: "Warm vertical condensation",
          },
          {
            title: "Power",
            text: "Cordless rechargeable",
          },
          {
            title: "Head Design",
            text: "Contra-angle with fine applicator",
          },
          {
            title: "Tip Color",
            text: "Green heated carrier/plugger",
          },
          {
            title: "Controls",
            text: "Temperature and mode selection",
          },
          {
            title: "Applications",
            text: "Root canal obturation, gutta-percha delivery",
          },
          {
            title: "Design",
            text: "Ergonomic white body with control buttons",
          },
        ],
        certifications: ["CE", "ISO 13485"],
      },
      {
        id: 27,
        title: "Air Polishing Handpiece",
        description:
          "Premium dental air polishing system for professional teeth cleaning. Features ergonomic pistol-grip design, transparent powder reservoir for easy monitoring, detachable angled nozzle, and high-efficiency stain and plaque removal technology.",
        image: kavo,
        specifications: [
          {
            title: "Design",
            text: "Ergonomic pistol-grip",
          },
          {
            title: "Reservoir",
            text: "Transparent for powder level monitoring",
          },
          {
            title: "Nozzle",
            text: "Angled, detachable for sterilization",
          },
          {
            title: "Powder Types",
            text: "Sodium bicarbonate, glycine, calcium carbonate",
          },
          {
            title: "Applications",
            text: "Stain removal, plaque removal, biofilm removal",
          },
          {
            title: "Color",
            text: "Dark blue body with silver accents",
          },
        ],
        certifications: ["CE", "ISO 13485"],
      },
      {
        id: 28,
        title: "Endodontic Motor System",
        description:
          "Advanced endodontic motor with integrated apex locator. Features color digital display, programmable speed/torque control, cordless handpiece with contra-angle attachment, and real-time root canal length measurement for precise treatment.",
        image: dteEndor,
        specifications: [
          {
            title: "Display",
            text: "Color digital LCD with visual indicators",
          },
          {
            title: "Apex Locator",
            text: "Integrated real-time measurement",
          },
          {
            title: "Handpiece",
            text: "Cordless with contra-angle attachment",
          },
          {
            title: "Controls",
            text: "Speed, torque, direction, file settings",
          },
          {
            title: "Charging",
            text: "Wireless docking station",
          },
          {
            title: "Connectivity",
            text: "USB ports for data/updates",
          },
        ],
        certifications: ["CE", "ISO 13485", "FDA"],
      },
    ],
  },
  {
    title: "Medical Chair",
    key: "medicalChair",
    items: [
      {
        id: 29,
        title: "Complete Dental Treatment Unit with LED Light",
        description:
          "Integrated dental workstation featuring patient chair with multi-segment positioning, articulated LED operating light, instrument delivery system with multiple handpiece connections, digital control panel, and ergonomic design for comprehensive dental procedures.",
        image: completeDental,
        specifications: [
          {
            title: "Chair",
            text: "Multi-position reclining with headrest",
          },
          {
            title: "Light",
            text: "Multi-LED shadowless illumination",
          },
          {
            title: "Delivery System",
            text: "Articulated arm with handpiece holders",
          },
          {
            title: "Control Panel",
            text: "Digital touchscreen interface",
          },
          {
            title: "Spittoon",
            text: "Integrated cuspidor with suction",
          },
          {
            title: "Foot Control",
            text: "Pneumatic foot pedal included",
          },
          {
            title: "Upholstery",
            text: "Medical-grade leather",
          },
          {
            title: "Design",
            text: "Ergonomic modular system",
          },
        ],
        certifications: ["CE", "ISO 13485"],
      },
      {
        id: 30,
        title: "Professional Dental Treatment Unit",
        description:
          "High-end dental treatment unit with complete operatory setup. Features ergonomic patient chair, advanced LED lighting, multiple handpiece delivery system, digital control panel, assistant station, and professional stool. Designed for comprehensive dental practice.",
        image: dacChair,
        specifications: [
          {
            title: "Chair Type",
            text: "Fully adjustable patient chair",
          },
          {
            title: "Lighting",
            text: "Articulated LED surgical light",
          },
          {
            title: "Handpieces",
            text: "Multiple connection ports",
          },
          {
            title: "Control System",
            text: "Digital display with presets",
          },
          {
            title: "Suction",
            text: "HVE and SE integrated",
          },
          {
            title: "Stool",
            text: "Height-adjustable professional stool",
          },
          {
            title: "Finish",
            text: "Premium upholstery and chrome accents",
          },
        ],
        certifications: ["CE", "ISO 13485", "FDA"],
      },
      {
        id: 31,
        title: "Integrated Dental Operatory with Patient Monitoring",
        description:
          "Advanced integrated dental operatory unit with patient chair, multi-LED surgical light, mobile instrument delivery cart, and integrated vital signs monitor. Features digital display for real-time monitoring of heart rate, blood pressure, and oxygen saturation during procedures.",
        image: dentalOperatory,
        specifications: [
          {
            title: "Chair",
            text: "Electric with programmable positions",
          },
          {
            title: "Monitor",
            text: "Vital signs display (HR, BP, SpO2)",
          },
          {
            title: "Lighting",
            text: "Multi-faceted LED with brightness control",
          },
          {
            title: "Delivery Cart",
            text: "Mobile with multiple handpiece holders",
          },
          {
            title: "Control Panel",
            text: "Digital with preset programs",
          },
          {
            title: "Mounting",
            text: "Articulated arms for monitor and light",
          },
          {
            title: "Footpedal",
            text: "Pneumatic control included",
          },
          {
            title: "Features",
            text: "Real-time patient monitoring integration",
          },
        ],
        certifications: ["CE", "ISO 13485", "FDA"],
      },
      {
        id: 32,
        title: "Modern Dental Treatment Chair Unit (Premium Black)",
        description:
          "Comprehensive dental treatment unit with sleek black upholstery. Includes fully adjustable patient chair, integrated instrument delivery console with digital controls, articulated examination light, ceramic spittoon with faucet, and ergonomic dentist stool. All-in-one modern operatory solution.",
        image: modernDental,
        specifications: [
          {
            title: "Upholstery",
            text: "Black medical-grade leather/vinyl",
          },
          {
            title: "Chair Adjustment",
            text: "Multi-position reclining with headrest",
          },
          {
            title: "Handpiece Holders",
            text: "5+ instrument connections",
          },
          {
            title: "Control Panel",
            text: "Digital touchscreen interface",
          },
          {
            title: "Bowl",
            text: "Ceramic with integrated faucet",
          },
          {
            title: "Light",
            text: "Multi-LED articulated examination light",
          },
          {
            title: "Stool",
            text: "Mobile with five-star base",
          },
          {
            title: "Design",
            text: "Contemporary streamlined aesthetic",
          },
        ],
        certifications: ["CE", "ISO 13485"],
      },
    ],
  },
];
