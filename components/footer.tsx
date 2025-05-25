import Link from "next/link";
import { Code } from "lucide-react";
import { siteConfig, navigationLinks } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="border-t">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Code className="h-6 w-6" />
              <span className="font-bold text-xl">Open Devans</span>
            </div>
            <p className="text-muted-foreground text-sm max-w-xs">
              A collective of software engineers building exceptional web and
              mobile applications.
            </p>
          </div>

          <div>
            <h3 className="font-medium text-base mb-4">Navigation</h3>
            <ul className="space-y-2">
              {navigationLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground text-sm hover:text-primary transition-colors"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-medium text-base mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/#services"
                  className="text-muted-foreground text-sm hover:text-primary transition-colors"
                >
                  Web Development
                </Link>
              </li>
              <li>
                <Link
                  href="/#services"
                  className="text-muted-foreground text-sm hover:text-primary transition-colors"
                >
                  Mobile Development
                </Link>
              </li>
              <li>
                <Link
                  href="/#services"
                  className="text-muted-foreground text-sm hover:text-primary transition-colors"
                >
                  UI/UX Design
                </Link>
              </li>
              <li>
                <Link
                  href="/#services"
                  className="text-muted-foreground text-sm hover:text-primary transition-colors"
                >
                  Technical Consulting
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium text-base mb-4">Connect</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href={siteConfig.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground text-sm hover:text-primary transition-colors"
                >
                  GitHub
                </Link>
              </li>
              <li>
                <Link
                  href={siteConfig.links.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground text-sm hover:text-primary transition-colors"
                >
                  Twitter
                </Link>
              </li>
              <li>
                <Link
                  href={siteConfig.links.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground text-sm hover:text-primary transition-colors"
                >
                  LinkedIn
                </Link>
              </li>
              <li>
                <Link
                  href="/#contact"
                  className="text-muted-foreground text-sm hover:text-primary transition-colors"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Open Devans. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
