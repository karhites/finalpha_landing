"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Star } from "lucide-react";

interface ReviewProps {
  image: string;
  name: string;
  userName: string;
  comment: string;
  rating: number;
}

const reviewList: ReviewProps[] = [
  {
    image: "https://github.com/shadcn.png",
    name: "Michael Chen",
    userName: "Portfolio Manager, Apex Capital",
    comment:
      "StockDrifts' AI-powered transcript analysis has revolutionized our research process. We can now extract key insights from earnings calls in minutes, not hours.",
    rating: 5.0,
  },
  {
    image: "https://github.com/shadcn.png",
    name: "Sarah Martinez",
    userName: "Senior Equity Analyst",
    comment:
      "The insider activity tracking and real-time alerts have helped me spot investment opportunities before they hit mainstream news. Invaluable tool for fundamental analysis.",
    rating: 4.8,
  },

  {
    image: "https://github.com/shadcn.png",
    name: "David Thompson",
    userName: "Chief Investment Officer",
    comment:
      "Institution-grade data quality with retail-friendly pricing. The customizable dashboard gives our team exactly the metrics we need for quick decision making.",
    rating: 4.9,
  },
  {
    image: "https://github.com/shadcn.png",
    name: "Emily Rodriguez",
    userName: "Quantitative Researcher",
    comment:
      "The SEC filings integration and AI chat feature has streamlined our due diligence process. We can analyze 10-Ks and 10-Qs faster than ever before.",
    rating: 5.0,
  },
  {
    image: "https://github.com/shadcn.png",
    name: "James Wilson",
    userName: "Independent Investor",
    comment:
      "As a retail investor, having access to the same data quality as hedge funds has leveled the playing field. The analyst consensus tracking is particularly valuable.",
    rating: 5.0,
  },
  {
    image: "https://github.com/shadcn.png",
    name: "Lisa Chang",
    userName: "Research Director, Valley Fund",
    comment:
      "The custom prompt engine allows our team to maintain consistent research standards across all our analysts. Game-changing platform for institutional research.",
    rating: 4.9,
  },
];

export const TestimonialSection = () => {
  return (
    <section id="testimonials" className="container py-24 sm:py-32">
      <div className="text-center mb-8">
        <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
          Client Stories
        </h2>

        <h2 className="text-3xl md:text-4xl text-center font-bold mb-4">
          Trusted by Investment Professionals
        </h2>
      </div>

      <Carousel
        opts={{
          align: "start",
        }}
        className="relative w-[80%] sm:w-[90%] lg:max-w-screen-xl mx-auto"
      >
        <CarouselContent>
          {reviewList.map((review) => (
            <CarouselItem
              key={review.name}
              className="md:basis-1/2 lg:basis-1/3"
            >
              <Card className="bg-muted/50 dark:bg-card">
                <CardContent className="pt-6 pb-0">
                  <div className="flex gap-1 pb-6">
                    <Star className="size-4 fill-primary text-primary" />
                    <Star className="size-4 fill-primary text-primary" />
                    <Star className="size-4 fill-primary text-primary" />
                    <Star className="size-4 fill-primary text-primary" />
                    <Star className="size-4 fill-primary text-primary" />
                  </div>
                  {`"${review.comment}"`}
                </CardContent>

                <CardHeader>
                  <div className="flex flex-row items-center gap-4">
                    <Avatar>
                      <AvatarImage
                        src="https://avatars.githubusercontent.com/u/75042455?v=4"
                        alt="radix"
                      />
                      <AvatarFallback>SV</AvatarFallback>
                    </Avatar>

                    <div className="flex flex-col">
                      <CardTitle className="text-lg">{review.name}</CardTitle>
                      <CardDescription>{review.userName}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </section>
  );
};
