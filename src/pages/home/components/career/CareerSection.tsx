import { motion } from "motion/react";
import CareerTimelineItem from "./CareerTimelineItem";
import EducationCard from "./EducationCard";
import CertificateCard from "./CertificateCard";
import AwardCard from "./AwardCard";
import IconCertification from "@/shared/components/Icons/IconCertification";
import IconWork from "@/shared/components/Icons/IconWork";
import IconSchool from "@/shared/components/Icons/IconSchool";
import IconAward from "@/shared/components/Icons/IconAward";
import type {
  School,
  Career,
  Award,
  Certificate,
} from "@/pages/home/model/home.types";

interface CareerSectionProps {
  schools: School[];
  careers: Career[];
  certificates: Certificate[];
  awards: Award[];
}

const CareerSection = ({
  schools,
  careers,
  certificates,
  awards,
}: CareerSectionProps) => {
  return (
    <motion.div
      key="career"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      className="w-full"
    >
      {/* 학교 */}
      <div className="mb-16">
        <h3 className="text-[1.85rem] font-semibold text-on-primary mb-8 flex items-center gap-2">
          Education
          <span>
            <IconSchool />
          </span>
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {schools.map((item, index) => (
            <EducationCard
              key={index}
              name={item.name}
              major={item.major}
              period={item.period}
              description={item.description}
              index={index}
            />
          ))}
        </div>
      </div>

      {/* 경력 */}
      <div className="mb-16">
        <h3 className="text-[1.85rem] font-semibold text-on-primary mb-8 flex items-center gap-2">
          Career
          <span>
            <IconWork />
          </span>
        </h3>
        <div className="relative pl-10 border-l-2 border-secondary/50">
          {careers.map((item, index) => (
            <CareerTimelineItem
              key={index}
              company={item.company}
              position={item.position}
              period={item.period}
              description={item.description}
              index={index}
            />
          ))}
        </div>
      </div>

      {/* 자격증 */}
      <div className="mb-16">
        <h3 className="text-[1.85rem] font-semibold text-on-primary mb-8 flex items-center gap-2">
          Certifications
          <span>
            <IconCertification />
          </span>
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {certificates.map((item, index) => (
            <CertificateCard
              key={index}
              name={item.name}
              issuer={item.issuer}
              date={item.date}
              index={index}
            />
          ))}
        </div>
      </div>

      {/* 수상 */}
      <div className="mb-16">
        <h3 className="text-[1.85rem] font-semibold text-on-primary mb-8 flex items-center gap-2">
          Awards
          <span>
            <IconAward />
          </span>
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {awards.map((item, index) => (
            <AwardCard
              key={index}
              name={item.name}
              organization={item.organization}
              date={item.date}
              index={index}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default CareerSection;
