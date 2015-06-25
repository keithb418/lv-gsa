FROM ubuntu:14.10

MAINTAINER Stephen Wright (clurect)

#basic
RUN apt-get install -y --no-install-recommends \
	software-properties-common 
RUN add-apt-repository -y ppa:webupd8team/java
RUN apt-get update && apt-get install -y \
	curl git-core wget unzip \
	ca-certificates 
#java 8 stuff
RUN echo oracle-java8-installer shared/accepted-oracle-license-v1-1 select true | /usr/bin/debconf-set-selections
RUN apt-get install -y oracle-java8-installer \
	build-essential

#mongo
RUN apt-get install -y mongodb
RUN mkdir -p /data/db

#supervisor setup
RUN apt-get install -y supervisor
RUN mkdir -p /var/lock/apache2 /var/run/apache2 /var/run/sshd /var/log/supervisor
COPY supervisord.conf /etc/supervisor/conf.d/supervisord.conf

ENV JAVA_HOME /usr/lib/jvm/java-8-oracle
ENV CATALINA_HOME /apache-tomcat-8.0.23
ENV PATH $CATALINA_HOME/bin:$PATH
#get tomcat8
RUN wget http://apache.mirrors.ionfish.org/tomcat/tomcat-8/v8.0.23/bin/apache-tomcat-8.0.23.zip
RUN unzip apache-tomcat-8.0.23.zip
COPY docker-conf/tomcat-users.xml $CATALINA_HOME/conf/

EXPOSE 8080 27017

RUN chmod +x /$CATALINA_HOME/bin/*.sh

CMD ["/usr/bin/supervisord"]