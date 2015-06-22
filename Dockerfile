FROM centos:centos6
MAINTAINER Stephen Wright (clurect)
RUN rpm -Uvh http://download.fedoraproject.org/pub/epel/6/i386/epel-release-6-8.noarch.rpm
EXPOSE 9000
RUN yum install -y \
 git \
 ruby ruby-devel rubygems \
 npm
RUN node -v
RUN npm install -g grunt-cli
RUN npm install -g bower
RUN gem install bundler
RUN git clone https://github.com/keithb418/lv-gsa.git
WORKDIR "/lv-gsa"
RUN npm install
RUN bower install
RUN bundle install
RUN grunt devBuild
CMD ["node","server.js"]